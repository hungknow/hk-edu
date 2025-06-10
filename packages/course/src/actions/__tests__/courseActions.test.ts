import { createCourse, getCourses } from '../';
import { describe, it, expect } from '@jest/globals';

describe('Course Actions', () => {
  describe('createCourse', () => {
    it('should create a new course with the provided data', async () => {
      const courseData = {
        name: 'Test Course',
        description: 'A test course description'
      };

      const course = await createCourse(courseData);

      expect(course).toMatchObject({
        name: courseData.name,
        description: courseData.description
      });
      expect(course.course_id).toBeDefined();
    });
  });

  describe('getCourses', () => {
    it('should return a list of courses', async () => {
      // First create a course
      const courseData = {
        name: 'Test Course',
        description: 'A test course description'
      };

      await createCourse(courseData);

      // Then get all courses
      const courses = await getCourses();

      expect(Array.isArray(courses)).toBe(true);
      expect(courses.length).toBeGreaterThan(0);
      expect(courses[0]).toMatchObject({
        name: courseData.name,
        description: courseData.description
      });
    });
  });
}); 