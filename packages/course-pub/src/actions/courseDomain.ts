import { Course } from "../models";

export interface CreateCourse {
    (initialCourse: Course): void;
}
