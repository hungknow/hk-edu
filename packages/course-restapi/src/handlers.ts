import { Request, Response } from 'express';
import { createCourse, getCourses } from '@hk/course';
import { CoursePostRequest } from '@hk/course-pub';

export async function createCourseHandler(req: Request, res: Response): Promise<void> {
  try {
    const courseData = req.body as CoursePostRequest;
    const course = await createCourse(courseData);
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ 
      code: 500, 
      message: error instanceof Error ? error.message : 'Internal server error' 
    });
  }
}

export async function getCoursesHandler(req: Request, res: Response): Promise<void> {
  try {
    const courses = await getCourses();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ 
      code: 500, 
      message: error instanceof Error ? error.message : 'Internal server error' 
    });
  }
} 