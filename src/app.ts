import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan'

import expenditureRoutes from './routes/expenditure.routes';

dotenv.config();
const app = express();

app.set('port', process.env.PORT || 4000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/expenditure', expenditureRoutes);

app.get('/', (_: Request, response: Response) => {
  response.send(`Hello world!`);
});

export default app;