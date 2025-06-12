import { FastifyRequest, FastifyReply } from 'fastify';
import type { GetCourses } from '@hk/course-pub';

export interface GetCoursesHandler {
  (request: FastifyRequest, reply: FastifyReply): Promise<void>
}

export function buildGetCoursesHandler({ getCourses }: { getCourses: GetCourses }): GetCoursesHandler {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const courses = await getCourses();
    reply.status(200).send(courses);
  };
}
