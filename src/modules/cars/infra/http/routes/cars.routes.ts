import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import { CarsController } from '../controllers/CarsController';

const carsRouter = Router();
const carController = new CarsController();

carsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      brand: Joi.string().required(),
      color: Joi.string().required(),
      year: Joi.number().required(),
      plate: Joi.string().required(),
    },
  }),
  carController.create,
);

carsRouter.post(
  '/search',
  celebrate({
    [Segments.BODY]: {
      search: Joi.alternatives(
        Joi.string().required(),
        Joi.number().required(),
      ),
    },
  }),
  carController.query,
);

export default carsRouter;
