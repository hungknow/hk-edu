import { Course, CoursePostRequest, CourseList } from '@hk/course-restapi-pub';

export interface CreateCourse {
  (payload: CoursePostRequest): Promise<Course>;
}

export interface GetCourses {
  (): Promise<CourseList>;
}

export interface CreateCourseResult {
  course: Course;
}

export interface GetCoursesResult {
  courses: CourseList;
}

export type CourseAction = CreateCourse | GetCourses;
export type CourseResult = CreateCourseResult | GetCoursesResult; 