import { FastifyInstance } from 'fastify';

import type { GetCoursesHandler, PostCoursesHandler } from './handlers';

export async function courseRoutes(
  fastify: FastifyInstance, 
  postCoursesHandler: PostCoursesHandler, 
  getCoursesHandler: GetCoursesHandler
) {
  fastify.post('/v1/courses', postCoursesHandler);
  fastify.get('/v1/courses', getCoursesHandler);
}
