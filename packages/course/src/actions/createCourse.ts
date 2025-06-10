import { v4 as uuidv4 } from 'uuid';
import { Course, CoursePostRequest, CreateCourse } from '@hk/course-pub';

// In-memory storage for courses (in a real app, this would be a database)
const courses: Course[] = [];

export const createCourse: CreateCourse = async (payload: CoursePostRequest) => {
  const course: Course = {
    course_id: uuidv4(),
    name: payload.name,
    description: payload.description,
  };
  
  courses.push(course);
  return course;
}; 