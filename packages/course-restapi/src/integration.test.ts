import { test, expect } from '@playwright/test';

test.describe('Course API Integration Tests', () => {
  const API_URL = 'http://localhost:3000';

  test('should create and retrieve courses', async ({ request }) => {
    // Create a new course
    const createResponse = await request.post(`${API_URL}/v1/courses`, {
      data: {
        name: 'Integration Test Course',
        description: 'A course created during integration testing'
      }
    });
    
    expect(createResponse.ok()).toBeTruthy();
    const course = await createResponse.json();
    expect(course.name).toBe('Integration Test Course');
    expect(course.description).toBe('A course created during integration testing');
    expect(course.course_id).toBeDefined();

    // Get all courses
    const getResponse = await request.get(`${API_URL}/v1/courses`);
    expect(getResponse.ok()).toBeTruthy();
    
    const courses = await getResponse.json();
    expect(Array.isArray(courses)).toBeTruthy();
    
    const createdCourse = courses.find((c: any) => c.course_id === course.course_id);
    expect(createdCourse).toBeDefined();
    expect(createdCourse.name).toBe('Integration Test Course');
  });
}); 