import { describe, expect, it, beforeAll, afterAll, beforeEach } from 'vitest';
import { buildCreateCourse, buildGetCourses } from '../src/actions';
import { buildCreateCourseEntity, buildGetCourseEntities, buildGetCourseDB } from '@hk/course-nosql-persistence';
import { createTestMongoDb } from '@hk/course-nosql-persistence/test-utils';
import { CreateCourse, GetCourses } from '@hk/course-pub';

describe('CrudCourse', () => {
  const testDb = createTestMongoDb();

  let createCourse: CreateCourse;
  let getCourses: GetCourses;

  beforeAll(async () => {
    // Set up MongoDB connection with unique database name
    const { client, dbName } = await testDb.setup({ describeName: 'CrudCourse' });

    const getCourseDB = buildGetCourseDB(async () => client, dbName);
    const createCourseEntity = buildCreateCourseEntity(getCourseDB);
    const getCourseEntities = buildGetCourseEntities(getCourseDB);

    createCourse = buildCreateCourse(createCourseEntity);
    getCourses = buildGetCourses(getCourseEntities);
  });

  afterAll(async () => {
    // Clean up and drop the test database
    await testDb.teardown();
  });

  beforeEach(async () => {
    // Clean up the test database collections before each test
    await testDb.cleanup();
  });

  it('should create and get courses', async () => {
    // Create course 1 with empty ID
    const course1Data = {
      title: 'Test Title 1',
      description: 'Test Description 1'
    };

    const createdCourse1 = await createCourse(course1Data);
    expect(createdCourse1.id).toBeTruthy();
    expect(createdCourse1.name).toBe(course1Data.description);
    expect(createdCourse1.title).toBe(course1Data.title);

    // Get courses and verify course 1
    const courses1 = await getCourses();
    expect(courses1).toHaveLength(1);
    expect(courses1[0].id).toBe(createdCourse1.id);
    expect(courses1[0].name).toBe(course1Data.description);
    expect(courses1[0].title).toBe(course1Data.title);

    // Create course 2 with pre-filled ID
    const course2Data = {
      title: 'Test Title 2',
      description: 'Test Description 2'
    };

    const createdCourse2 = await createCourse(course2Data);
    expect(createdCourse2.id).toBeTruthy();
    expect(createdCourse2.name).toBe(course2Data.description);
    expect(createdCourse2.title).toBe(course2Data.title);

    // Get courses and verify both courses
    const courses2 = await getCourses();
    expect(courses2).toHaveLength(2);
    
    const foundCourse1 = courses2.find(c => c.id === createdCourse1.id);
    expect(foundCourse1).toBeTruthy();
    expect(foundCourse1?.name).toBe(course1Data.description);
    expect(foundCourse1?.title).toBe(course1Data.title);

    const foundCourse2 = courses2.find(c => c.id === createdCourse2.id);
    expect(foundCourse2).toBeTruthy();
    expect(foundCourse2?.name).toBe(course2Data.description);
    expect(foundCourse2?.title).toBe(course2Data.title);
  });
}); 