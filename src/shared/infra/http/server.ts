import 'reflect-metadata';
import express from 'express';
import { errors } from 'celebrate';
import cors from 'cors';
import { dataSource } from '../typeorm/database';
import routes from './routes';

const app = express();

dataSource
  .initialize()
  .then(() => {
    app.use(cors());
    app.use(express.json());
    app.use(routes);
    app.use(errors());

    app.listen(3333, () => {
      console.log('Server started on port 3333!');
    });
  })
  .catch(err => console.error(err));
