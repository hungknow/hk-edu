import { z } from "zod";

export const zCourse = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
});

export type Course = z.infer<typeof zCourse>;

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
