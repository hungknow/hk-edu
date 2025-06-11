import { GetCourses } from '@hk/course-pub';
import { getCourseEntities } from '@hk/course-nosql-persistence';

export const getCourses: GetCourses = async () => {
  const courseEntities = await getCourseEntities();
  return courseEntities.map(entity => ({
    id: entity._id.toHexString(), // Convert ObjectId to string
    title: entity.title,
    name: entity.name, // Map name back to description for the public model
  }));
}; 