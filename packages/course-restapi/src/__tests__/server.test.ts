import { describe, it, expect, beforeAll, afterAll } from '@jest/globals';
import { FastifyInstance } from 'fastify';
import { createServer } from '../server';
import { InMemoryCourseRepository } from '@hk/course-nosql-persistence';
import { createCreateCourse, createGetCourses } from '@hk/course';

describe('Course REST API Integration Tests', () => {
    let server: FastifyInstance;
    const courseRepository = new InMemoryCourseRepository();

    beforeAll(async () => {
        const createCourse = createCreateCourse(courseRepository);
        const getCourses = createGetCourses(courseRepository);
        server = await createServer({ createCourse, getCourses });
        await server.ready();
    });

    afterAll(async () => {
        await server.close();
    });

    it('should create a new course via POST /v1/courses', async () => {
        const courseData = {
            title: 'Test Course',
            description: 'A test course description'
        };

        const response = await server.inject({
            method: 'POST',
            url: '/v1/courses',
            payload: courseData
        });

        expect(response.statusCode).toBe(201);
        const course = JSON.parse(response.payload);
        expect(course.title).toBe(courseData.title);
        expect(course.description).toBe(courseData.description);
        expect(course.id).toBeDefined();
    });

    it('should get list of courses via GET /v1/courses', async () => {
        const response = await server.inject({
            method: 'GET',
            url: '/v1/courses'
        });

        expect(response.statusCode).toBe(200);
        const courses = JSON.parse(response.payload);
        expect(Array.isArray(courses)).toBe(true);
        expect(courses.length).toBe(1);
        expect(courses[0].title).toBe('Test Course');
    });

    it('should create multiple courses and list them', async () => {
        const courseData = {
            title: 'Second Course',
            description: 'Another test course'
        };

        // Create second course
        const createResponse = await server.inject({
            method: 'POST',
            url: '/v1/courses',
            payload: courseData
        });
        expect(createResponse.statusCode).toBe(201);

        // Get all courses
        const listResponse = await server.inject({
            method: 'GET',
            url: '/v1/courses'
        });

        expect(listResponse.statusCode).toBe(200);
        const courses = JSON.parse(listResponse.payload);
        expect(Array.isArray(courses)).toBe(true);
        expect(courses.length).toBe(2);
        expect(courses.some(c => c.title === 'Test Course')).toBe(true);
        expect(courses.some(c => c.title === 'Second Course')).toBe(true);
    });
}); 