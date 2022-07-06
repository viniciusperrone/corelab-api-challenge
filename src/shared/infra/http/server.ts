import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { dataSource } from '../typeorm/database';

const app = express();

dataSource
  .initialize()
  .then(() => {
    app.use(cors());
    app.use(express.json());

    app.listen(3333, () => {
      console.log('Server started on port 3333!');
    });
  })
  .catch(err => console.error(err));
