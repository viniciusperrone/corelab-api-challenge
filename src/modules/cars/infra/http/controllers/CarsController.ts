import ICreateCarDTO from '@modules/cars/domain/dtos/ICreateCarDTO';
import { ISearchCarsDTO } from '@modules/cars/domain/dtos/ISearchCarsDTO';
import { CreateCarService } from '@modules/cars/services/CreateCarService';
import { SearchService } from '@modules/cars/services/SearchService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CarsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, brand, color, year, plate } = request.body as ICreateCarDTO;

    const createCar = container.resolve(CreateCarService);

    const car = await createCar.execute({
      name,
      brand,
      color: color.toUpperCase(),
      year,
      plate,
    });

    return response.json(car);
  }
  public async query(request: Request, response: Response): Promise<Response> {
    const { search } = request.body as ISearchCarsDTO;

    const searchCar = container.resolve(SearchService);

    const cars = await searchCar.execute({ search });

    return response.json(cars);
  }
}

export { CarsController };
