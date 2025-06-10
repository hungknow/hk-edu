export interface Course {
  course_id: string;
  name: string;
  description: string;
}

export interface CoursePostRequest {
  name: string;
  description: string;
}

export interface CourseList extends Array<Course> {}

export interface CourseDetail extends Course {
  lessons: Array<{
    lesson_id: string;
    title: string;
  }>;
}

export interface Error {
  code: number;
  message: string;
}
