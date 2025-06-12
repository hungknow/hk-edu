import { Collection, Db, ObjectId } from "mongodb";
import { buildCreateCourseEntity, CreateCourseEntity } from "../../src/actions/createCourseEntity";
import { CourseEntity } from "../../src/entities/course";
import { buildGetCourseDB, GetCourseDB } from "../../src/internal-actions/getCourseDB";
import { GetMongoClient } from "../../src/internal-actions/getMongoClient";

// We are mocking buildGetCourseDB, so it's not strictly necessary to mock the entire internal-actions module.
// jest.mock("../../src/internal-actions");

describe("CreateCourseEntity", () => {
    let mockCollection: Collection<CourseEntity>;
    let mockDb: Db;
    let createCourseEntity: CreateCourseEntity;
    let mockGetMongoClient: GetMongoClient;
    let mockGetCourseDB: GetCourseDB;

    beforeEach(() => {
        mockCollection = {
            insertOne: jest.fn(),
        } as unknown as Collection<CourseEntity>;

        mockDb = {
            collection: jest.fn(() => mockCollection),
        } as unknown as Db;

        // Mock getMongoClient to return a client with the mocked db
        mockGetMongoClient = jest.fn().mockResolvedValue({ db: () => mockDb });

        // Build the getCourseDB action with the mocked getMongoClient
        mockGetCourseDB = buildGetCourseDB(mockGetMongoClient, "test_db");

        // Build the createCourseEntity action with the mocked getCourseDB
        createCourseEntity = buildCreateCourseEntity(mockGetCourseDB);

        // Ensure collection.insertOne returns an object with acknowledged and insertedId
        (mockCollection.insertOne as jest.Mock).mockResolvedValue({ acknowledged: true, insertedId: new ObjectId() });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("should create a course entity and return it", async () => {
        // Arrange
        const courseInput = {
            title: "Test Title",
            description: "Test Description",
        };

        const expectedInsertedEntity = {
            title: courseInput.title,
            description: courseInput.description,
        };

        const insertedId = new ObjectId();
        (mockCollection.insertOne as jest.Mock).mockResolvedValue({ acknowledged: true, insertedId });

        // Act
        const result = await createCourseEntity(courseInput);

        // Assert
        expect(mockGetCourseDB).toHaveBeenCalledTimes(1);
        expect(mockDb.collection).toHaveBeenCalledWith("courses");
        expect(mockCollection.insertOne).toHaveBeenCalledWith(expectedInsertedEntity);
        expect(result).toEqual({
            _id: insertedId,
            title: courseInput.title,
            description: courseInput.description,
            name: courseInput.title, // 'name' is derived from 'title' in the action
        });
    });

    it("should throw an error if insertion is not acknowledged", async () => {
        // Arrange
        const courseInput = {
            title: "Test Title",
            description: "Test Description",
        };

        (mockCollection.insertOne as jest.Mock).mockResolvedValue({
            acknowledged: false,
            insertedId: undefined,
        });

        // Act & Assert
        await expect(createCourseEntity(courseInput)).rejects.toThrow("Failed to create course entity");
    });

    it("should throw an error if an exception occurs during insertion", async () => {
        // Arrange
        const courseInput = {
            title: "Test Title",
            description: "Test Description",
        };

        const mockError = new Error("MongoDB connection error");
        (mockCollection.insertOne as jest.Mock).mockRejectedValue(mockError);

        // Act & Assert
        await expect(createCourseEntity(courseInput)).rejects.toThrow(mockError);
    });
});
