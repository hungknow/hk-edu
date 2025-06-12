import type { GetCourses } from '@hk/course-pub';
import { GetCourseEntities } from '@hk/course-nosql-persistence';
import type { CourseEntity } from '@hk/course-nosql-persistence/src/entities';

export interface BuildGetCoursesParams {
  getCourseEntities: GetCourseEntities;
}

export function buildGetCourses({ getCourseEntities }: BuildGetCoursesParams): GetCourses {
  return async () => {
    const courseEntities = await getCourseEntities();
    return courseEntities.map((entity: CourseEntity) => ({
      id: entity._id.toHexString(), // Convert ObjectId to string
      title: entity.title,
      name: entity.name, // Map name back to description for the public model
    }));
  };
} 