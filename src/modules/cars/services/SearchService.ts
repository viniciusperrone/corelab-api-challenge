import { injectable as Injectable, inject as Inject } from 'tsyringe';
import { Car } from '../infra/typeorm/entities/Car';
import ICarsRepository from '../domain/repositories/ICarsRepository';
import { ISearchCarsDTO } from '../domain/dtos/ISearchCarsDTO';
import { AppError } from '@shared/errors/AppError';

@Injectable()
class SearchService {
  constructor(
    @Inject('CarsRepository')
    private carsReporitory: ICarsRepository,
  ) {}

  public async execute({ search }: ISearchCarsDTO): Promise<Car[]> {
    const cars = await this.carsReporitory.findCarByWord({ search });

    if (!cars) {
      throw new AppError('Cars not found!', 401);
    }

    return cars;
  }
}

export { SearchService };
