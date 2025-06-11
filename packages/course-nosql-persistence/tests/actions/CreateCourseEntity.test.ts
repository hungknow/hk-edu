import { Collection, Db, ObjectId } from "mongodb";
import { createCourseEntity } from "../../src/actions/createCourseEntity";
import { CourseEntity } from "../../src/entities/course";
import { getCourseDB } from "../../src/internal-actions";

jest.mock("../../src/internal-actions");

describe("CreateCourseEntity", () => {
    let mockCollection: Collection<CourseEntity>;
    let mockDb: Db;

    beforeEach(() => {
        mockCollection = {
            insertOne: jest.fn(),
        } as unknown as Collection<CourseEntity>;

        mockDb = {
            collection: jest.fn(() => mockCollection),
        } as unknown as Db;

        (getCourseDB as jest.Mock).mockResolvedValue(mockDb);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("should create a course entity and return it", async () => {
        // Arrange
        const course: CourseEntity = {
            _id: new ObjectId(),
            title: "Test Title",
            name: "Test Description",
        };

        (mockCollection.insertOne as jest.Mock).mockResolvedValue({
            acknowledged: true,
            insertedId: course._id,
        });

        // Act
        const result = await createCourseEntity({ title: course.title, description: course.name });

        // Assert
        expect(getCourseDB).toHaveBeenCalledTimes(1);
        expect(mockDb.collection).toHaveBeenCalledWith("courses");
        expect(mockCollection.insertOne).toHaveBeenCalledWith(course);
        expect(result).toEqual(course);
    });

    it("should throw an error if insertion is not acknowledged", async () => {
        // Arrange
        const course: CourseEntity = {
            _id: new ObjectId(),
            title: "Test Title",
            name: "Test Name",
        };

        (mockCollection.insertOne as jest.Mock).mockResolvedValue({
            acknowledged: false,
            insertedId: undefined,
        });

        // Act & Assert
        await expect(createCourseEntity({ title: course.title, description: course.name })).rejects.toThrow("Failed to create course entity");
    });

    it("should throw an error if an exception occurs during insertion", async () => {
        // Arrange
        const course: CourseEntity = {
            _id: new ObjectId(),
            title: "Test Title",
            name: "Test Name",
        };

        const mockError = new Error("MongoDB connection error");
        (mockCollection.insertOne as jest.Mock).mockRejectedValue(mockError);

        // Act & Assert
        await expect(createCourseEntity({ title: course.title, description: course.name })).rejects.toThrow(mockError);
    });
});
