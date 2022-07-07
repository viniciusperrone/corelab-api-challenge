import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import { errors } from 'celebrate';
import cors from 'cors';

import { dataSource } from '../typeorm/database';
import routes from './routes';
import '@shared/container';
import { AppError } from '@shared/errors/AppError';

const app = express();

dataSource
  .initialize()
  .then(() => {
    app.use(cors());
    app.use(express.json());
    app.use(routes);
    app.use(errors());

    app.use(
      (error: Error, request: Request, response: Response, _: NextFunction) => {
        if (error instanceof AppError) {
          return response.status(error.statusCode).json({
            status: 'error',
            message: error.message,
          });
        }

        return response.status(500).json({
          status: 'error',
          message: 'Internal server error',
        });
      },
    );

    app.listen(3333, () => {
      console.log('Server started on port 3333!');
    });
  })
  .catch(err => console.error(err));
