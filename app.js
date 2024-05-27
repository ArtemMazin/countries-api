import express from 'express';
import router from './routes';
import cors from 'cors';

const { PORT = 3000 } = process.env;

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3001', 'http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  })
);

app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
