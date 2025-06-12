import type { Collection } from "mongodb";
import { CourseEntity } from '../entities/course';
import type { GetCourseDB } from "../internal-actions";

export interface GetCourseEntities {
    (): Promise<CourseEntity[]>
}

export function buildGetCourseEntities(getCourseDB: GetCourseDB): GetCourseEntities {
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