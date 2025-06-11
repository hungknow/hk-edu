import { z } from "zod";

export const zCourse = z.object({
  id: z.string(),
  name: z.string(),
  title: z.string(),
});

export type Course = z.infer<typeof zCourse>;

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
