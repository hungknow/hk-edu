import { Course } from "../models";

export interface SaveCourseIntoDB {
    (initialCourse: Course): void;
}
