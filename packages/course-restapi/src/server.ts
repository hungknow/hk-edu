import fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import { courseRoutes } from './routes';

export async function createServer(): Promise<FastifyInstance> {
    const server = fastify({
        logger: true
    });

    server.register(cors, {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    });

    courseRoutes(server)

    return server;
}

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

const start = async () => {
    try {
        const app = await createServer();
        await app.listen({ port, host: '0.0.0.0' });
        console.log(`Server listening on ${app.server.address()}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start(); 