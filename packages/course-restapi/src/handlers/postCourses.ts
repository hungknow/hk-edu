import { FastifyRequest, FastifyReply } from 'fastify';
import { createCourse } from '@hk/course';
import { zCoursePostRequest } from '@hk/course-restapi-pub';

export async function postCoursesHandler(request: FastifyRequest, reply: FastifyReply) {
  const coursePostRequest = zCoursePostRequest.parse(request.body);
  const newCourse = await createCourse(coursePostRequest);
  reply.status(201).send(newCourse);
}
