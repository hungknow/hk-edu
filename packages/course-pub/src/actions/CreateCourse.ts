import { Course } from "../models";

export interface CreateCourse {
    (course: { title: string; description: string; }): Promise<Course>;
}
