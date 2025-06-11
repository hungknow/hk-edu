import { z } from "zod";
import { ObjectId } from "mongodb";

// Course entity schema as defined in docs/mongodb/index.md
export const zCourseEntity = z.object({
  _id: z.instanceof(ObjectId),
  name: z.string(),
  title: z.string(),
});

export type CourseEntity = z.infer<typeof zCourseEntity>;
