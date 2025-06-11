import { Collection } from "mongodb";
import { CourseEntity } from '../entities/course';
import { getCourseDB } from "../internal-actions";

export async function getCourseEntities(): Promise<CourseEntity[]> {
  const db = await getCourseDB();
  const collection: Collection<CourseEntity> = db.collection("courses");

  try {
    const courses = await collection.find({}).toArray();
    return courses;
  } catch (error) {
    console.error("Error retrieving course entities:", error);
    throw error;
  }
}