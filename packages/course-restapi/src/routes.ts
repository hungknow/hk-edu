import { FastifyInstance} from 'fastify';

import { createCourseHandler, getCoursesHandler } from './handlers';

export async function courseRoutes(fastify: FastifyInstance) {
  fastify.post('/v1/courses', createCourseHandler);
  fastify.get('/v1/courses', getCoursesHandler);
}
