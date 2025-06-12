import type { Collection } from "mongodb";
import { CourseEntity } from '../entities/course';
import type { GetCourseDB } from "./getCourseDB";

export interface GetCourseEntities {
    (): Promise<CourseEntity[]>
}

export interface BuildGetCourseEntitiesParams {
    getCourseDB: GetCourseDB;
}

export function buildGetCourseEntities({ getCourseDB }: BuildGetCourseEntitiesParams): GetCourseEntities {
    return async (): Promise<CourseEntity[]> => {
        const db = await getCourseDB();
        const collection: Collection<CourseEntity> = db.collection("courses");

        try {
            const courses = await collection.find({}).toArray();
            return courses;
        } catch (error) {
            console.error("Error retrieving course entities:", error);
            throw error;
        }
    }
}