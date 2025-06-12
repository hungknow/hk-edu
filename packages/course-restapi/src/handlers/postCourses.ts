import { FastifyRequest, FastifyReply } from 'fastify';
import type { CreateCourse } from '@hk/course-pub';
import { zCoursePostRequest } from '@hk/course-restapi-pub';

export interface PostCoursesHandler {
  (request: FastifyRequest, reply: FastifyReply): Promise<void>
}

export function buildPostCoursesHandler(createCourse: CreateCourse): PostCoursesHandler {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const coursePostRequest = zCoursePostRequest.parse(request.body);
    const newCourse = await createCourse(coursePostRequest);
    reply.status(201).send(newCourse);
  };
}
