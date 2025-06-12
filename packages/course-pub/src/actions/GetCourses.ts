import { Course } from '../models/course';

export interface GetCourses {
    (): Promise<Course[]>;
}
