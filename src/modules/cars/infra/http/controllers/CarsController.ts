import ICreateCarDTO from '@modules/cars/domain/dtos/ICreateCarDTO';
import { CreateCarService } from '@modules/cars/services/CreateCarService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CarsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, brand, color, year, plate } = request.body as ICreateCarDTO;

    const createCar = container.resolve(CreateCarService);

    const car = await createCar.execute({
      ...request.body,
    });

    return response.json(car);
  }
}

export { CarsController };
