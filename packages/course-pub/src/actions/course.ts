import { Course, CoursePostRequest, CourseList } from '../models/course';

export interface CreateCourse {
  (payload: CoursePostRequest): Promise<Course>;
}

export interface GetCourses {
  (): Promise<CourseList>;
}
