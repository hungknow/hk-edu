import { Course } from '../models/course';

export interface CreateCourse {
    (course: { title: string; description: string; }): Promise<Course>;
}

export interface GetCourses {
    (): Promise<Course[]>;
}
