import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
const app = express();

// parser
app.use(express.json());
app.use(cors());

// server main route
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.json({
    status: 200,
    success: true,
    message: 'Portfolio server is running...',
  });
});

export default app;
