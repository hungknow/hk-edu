import express from 'express';
import cors from 'cors';
import { createCourseHandler, getCoursesHandler } from './handlers';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/v1/courses', createCourseHandler);
app.get('/v1/courses', getCoursesHandler);

export default app; 