import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import { CreateCarService } from '@modules/cars/services/CreateCarService';
import { UpdateCarService } from '@modules/cars/services/UpdateCarService';
import { SearchService } from '@modules/cars/services/SearchService';
import { ICarDTO } from '@modules/cars/domain/dtos/ICarDTO';
import { ICreateCarDTO } from '@modules/cars/domain/dtos/ICreateCarDTO';
import { ISearchCarsDTO } from '@modules/cars/domain/dtos/ISearchCarsDTO';

class CarsController {
  public async query(request: Request, response: Response): Promise<Response> {
    const { search } = request.body as ISearchCarsDTO;

    const searchCar = container.resolve(SearchService);

    const cars = await searchCar.execute({ search });

    return response.json(instanceToInstance(cars));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, brand, color, year, plate, price, description } =
      request.body as ICreateCarDTO;

    const createCar = container.resolve(CreateCarService);

    const car = await createCar.execute({
      name: name.toUpperCase(),
      brand: brand.toUpperCase(),
      color: color.toUpperCase(),
      year,
      plate: plate.toUpperCase(),
      price,
      description,
    });

    return response.json(instanceToInstance(car));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const { name, brand, color, year, plate, price, description } =
      request.body as ICarDTO;

    const updateCar = container.resolve(UpdateCarService);

    const car = await updateCar.execute({ id, ...request.body });

    return response.json(instanceToInstance(car));
  }
}

export { CarsController };
