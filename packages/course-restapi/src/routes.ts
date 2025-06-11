import { FastifyInstance} from 'fastify';

import { postCoursesHandler, getCoursesHandler } from './handlers';

export async function courseRoutes(fastify: FastifyInstance) {
  fastify.post('/v1/courses', postCoursesHandler);
  fastify.get('/v1/courses', getCoursesHandler);
}
