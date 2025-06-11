import { FastifyRequest, FastifyReply } from 'fastify';
import { getCourses } from '@hk/course';

export async function getCoursesHandler(request: FastifyRequest, reply: FastifyReply) {
  const courses = await getCourses();
  reply.status(200).send(courses);
}
