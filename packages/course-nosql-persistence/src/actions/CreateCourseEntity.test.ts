import { describe, expect, it, beforeEach, afterEach, vitest, Mock } from 'vitest';
import { Collection, Db, ObjectId } from "mongodb";
import { buildCreateCourseEntity, CreateCourseEntity } from "./createCourseEntity";
import { CourseEntity } from "../entities/course";
import { buildGetCourseDB, GetCourseDB } from ".";
import { GetMongoClient } from "./getMongoClient";
import { IMongoConfig } from '../config.types';

describe("CreateCourseEntity", () => {
    let mockCollection: Collection<CourseEntity>;
    let mockDb: Db;
    let createCourseEntity: CreateCourseEntity;
    let mockGetMongoClient: GetMongoClient;
    let mockGetCourseDB: GetCourseDB;

    beforeEach(() => {
        mockCollection = {
            insertOne: vitest.fn(),
        } as unknown as Collection<CourseEntity>;

        mockDb = {
            collection: vitest.fn(() => mockCollection),
        } as unknown as Db;

        // Mock getMongoClient to return a client with the mocked db
        mockGetMongoClient = vitest.fn().mockResolvedValue({ db: () => mockDb });

        const courseMongoDBCredentials: IMongoConfig = {
            protocol: '',
            host: '',
            port: 10,
            dbName: '',
            user: '',
            pass: '',
            params: '',
        }
        // Mock getCourseDB to return the mocked database instance for createCourseEntity
        mockGetCourseDB = vitest.fn().mockResolvedValue(mockDb);

        // Build the createCourseEntity action with the mocked getCourseDB
        createCourseEntity = buildCreateCourseEntity({ getCourseDB: mockGetCourseDB });

        // Ensure collection.insertOne returns an object with acknowledged and insertedId
        (mockCollection.insertOne as Mock).mockResolvedValue({ acknowledged: true, insertedId: new ObjectId() });
    });

    afterEach(() => {
        vitest.restoreAllMocks();
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
        (mockCollection.insertOne as Mock).mockResolvedValue({ acknowledged: true, insertedId });

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

        (mockCollection.insertOne as Mock).mockResolvedValue({
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
        (mockCollection.insertOne as Mock).mockRejectedValue(mockError);

        // Act & Assert
        await expect(createCourseEntity(courseInput)).rejects.toThrow(mockError);
    });
});
