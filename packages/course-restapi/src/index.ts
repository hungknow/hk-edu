import Fastify from 'fastify';
import { courseRoutes } from './routes';
import { ZodError } from 'zod';

const fastify = Fastify({ logger: true });

// Add global error handler
fastify.setErrorHandler((error, request, reply) => {
  // Log the error
  fastify.log.error(error);

  // Handle validation errors (from Zod)
  if (error instanceof ZodError) {
    return reply.status(400).send({
      statusCode: 400,
      error: 'Bad Request',
      message: 'Invalid request body',
      details: error.errors
    });
  }

  // Handle other errors
  return reply.status(500).send({
    statusCode: 500,
    error: 'Internal Server Error',
    message: 'An unexpected error occurred'
  });
});

fastify.register(courseRoutes);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start(); 