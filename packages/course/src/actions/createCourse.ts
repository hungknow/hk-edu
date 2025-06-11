import { CreateCourse } from '@hk/course-pub';
import { createCourseEntity } from '@hk/course-nosql-persistence';

export const createCourse: CreateCourse = async (courseData) => {
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