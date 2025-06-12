import { describe, it, expect, vi } from 'vitest';
import { buildCreateCourse } from './createCourse';

describe('buildCreateCourse', () => {
  it('should create a course successfully', async () => {
    const mockCourseData = {
      title: 'Test Course',
      description: 'This is a test course description.',
    };

    const mockCreatedEntity = {
      _id: { toHexString: vi.fn().mockReturnValue('mock-id') },
      title: 'Test Course',
      description: 'This is a test course description.',
    };

    const mockCreateCourseEntity = vi.fn().mockResolvedValue(mockCreatedEntity);

    const createCourse = buildCreateCourse({
      createCourseEntity: mockCreateCourseEntity,
    });

    const createdCourse = await createCourse(mockCourseData);

    expect(mockCreateCourseEntity).toHaveBeenCalledWith({
      title: mockCourseData.title,
      description: mockCourseData.description,
    });
    expect(createdCourse).toEqual({
      id: 'mock-id',
      title: mockCourseData.title,
      description: mockCourseData.description,
    });
  });
});
