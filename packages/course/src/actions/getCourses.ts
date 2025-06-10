import { CourseList, GetCourses } from '@hk/course-pub';

// In-memory storage for courses (in a real app, this would be a database)
const courses: CourseList = [];

export const getCourses: GetCourses = async () => {
  return courses;
}; 