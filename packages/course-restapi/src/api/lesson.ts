import { FastifyInstance, FastifyPluginAsync } from 'fastify';

// Mock lesson data
const mockLessons = {
  '1': [
    {
      id: '1',
      course_id: '1',
      title: 'Getting Started with TypeScript',
      content: 'Base64EncodedYjsContent1'
    },
    {
      id: '2',
      course_id: '1',
      title: 'TypeScript Types',
      content: 'Base64EncodedYjsContent2'
    }
  ],
  '2': [
    {
      id: '3',
      course_id: '2',
      title: 'React Hooks',
      content: 'Base64EncodedYjsContent3'
    },
    {
      id: '4',
      course_id: '2',
      title: 'State Management',
      content: 'Base64EncodedYjsContent4'
    }
  ]
};

export const lessonRoutes: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  // GET /v1/courses/{course_id}/lessons
  fastify.get<{
    Params: { course_id: string };
  }>('/v1/courses/:course_id/lessons', async (request, reply) => {
    const { course_id } = request.params;
    
    const lessons = mockLessons[course_id];
    
    if (!lessons) {
      reply.code(404).send({
        code: 404,
        message: 'No lessons found for this course'
      });
      return;
    }

    return { lessons };
  });
}; 