import Fastify from 'fastify';

import { lessonRoutes } from './api/lesson';
import { courseRoutes } from './api/course';


const fastify = Fastify({
  logger: true
});


// Register lesson routes
// TODO: Replace with actual lesson service implementation
const mockLessonService = {
  getLessonById: async (id: string) => ({ id, title: `Lesson ${id}`, status: 'default', courseId: '1', order: 0, createdAt: new Date(), updatedAt: new Date() }),
  getLessonsByCourseId: async (courseId: string) => [],
  createLesson: async (lesson: any) => ({ ...lesson, id: 'new-lesson', createdAt: new Date(), updatedAt: new Date() }),
  updateLesson: async (id: string, lesson: any) => ({ id, title: `Lesson ${id}`, status: 'default', courseId: '1', order: 0, createdAt: new Date(), updatedAt: new Date(), ...lesson }),
  deleteLesson: async (id: string) => {},
};

fastify.register(lessonRoutes, { lessonService: mockLessonService });

// Register all route handlers
async function start() {
  try {
    // Register routes
    await fastify.register(courseRoutes);
    await fastify.register(lessonRoutes);

    // Start the server
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
