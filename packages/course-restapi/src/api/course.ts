import { FastifyInstance, FastifyPluginAsync } from 'fastify';

// Mock data for development
const mockCourses = [
  {
    course_id: '1',
    name: 'Introduction to TypeScript',
    description: 'Learn the basics of TypeScript'
  },
  {
    course_id: '2',
    name: 'Advanced React',
    description: 'Master React with TypeScript'
  }
];

export const courseRoutes: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  // GET /v1/courses
  fastify.get('/v1/courses', async (request, reply) => {
    return mockCourses;
  });

  // POST /v1/courses (search)
  fastify.post<{
    Body: { search_term: string };
  }>('/v1/courses', async (request, reply) => {
    const { search_term } = request.body;
    
    // Simple search implementation
    const filteredCourses = mockCourses.filter(course => 
      course.name.toLowerCase().includes(search_term.toLowerCase()) ||
      course.description.toLowerCase().includes(search_term.toLowerCase())
    );
    
    return filteredCourses;
  });

  // GET /v1/courses/{course_id}
  fastify.get<{
    Params: { course_id: string };
  }>('/v1/courses/:course_id', async (request, reply) => {
    const { course_id } = request.params;
    
    const course = mockCourses.find(c => c.course_id === course_id);
    
    if (!course) {
      reply.code(404).send({ 
        code: 404,
        message: 'Course not found'
      });
      return;
    }

    // Mock detailed course data
    return {
      ...course,
      lessons: [
        {
          lesson_id: '1',
          title: 'Getting Started'
        },
        {
          lesson_id: '2',
          title: 'Basic Concepts'
        }
      ]
    };
  });
}; 