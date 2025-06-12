import fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import { courseRoutes } from './routes';
import { createContainer, asFunction } from 'awilix';
import { buildGetCoursesHandler, buildPostCoursesHandler } from './handlers';
import { awilixRegisterActions as awilixRegisterActionsCourse } from '@hk/course'
import { awilixRegisterActions as awilixRegisterActionsCourseNosql, awilixRegisterCourseMongoDBCredentials } from '@hk/course-nosql-persistence'
import { ZodError } from 'zod';
import config from 'config';

export async function createServer(): Promise<FastifyInstance> {
    const server = fastify({
        logger: true
    });
    server.setErrorHandler((error, request, reply) => {
        // Log the error
        server.log.error(error);

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

    const container = createContainer()

    server.register(cors, {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    });

    awilixRegisterActionsCourseNosql(container)
    awilixRegisterActionsCourse(container)
    awilixRegisterCourseMongoDBCredentials(container, config.courseDBMongo)

    container.register({
        postCoursesHandler: asFunction(buildPostCoursesHandler),
        getCoursesHandler: asFunction(buildGetCoursesHandler),
    })

    courseRoutes(server, container.cradle.postCoursesHandler, container.cradle.getCoursesHandler)

    return server;
}

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

export const start = async () => {
    try {
        const app = await createServer();
        await app.listen({ port, host: '0.0.0.0' });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};