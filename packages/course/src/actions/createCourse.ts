import type { CreateCourse } from '@hk/course-pub';
import type { CreateCourseEntity } from '@hk/course-nosql-persistence';

export interface BuildCreateCourseParams {
  createCourseEntity: CreateCourseEntity;
}

export function buildCreateCourse({ createCourseEntity }: BuildCreateCourseParams): CreateCourse {
  return async (courseData) => {
    const createdEntity = await createCourseEntity({
      title: courseData.title,
      description: courseData.description,
    });
  
    return {
      id: createdEntity._id.toHexString(),
      title: createdEntity.title,
      name: createdEntity.name, 
    };
  };
}