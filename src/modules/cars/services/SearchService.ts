import { injectable as Injectable, inject as Inject } from 'tsyringe';
import ICarsRepository from '../domain/repositories/ICarsRepository';
import { Car } from '../infra/typeorm/entities/Car';
import { ISearchCarsDTO } from '../domain/dtos/ISearchCarsDTO';

@Injectable()
class SearchService {
  constructor(
    @Inject('CarsRepository')
    private carsReporitory: ICarsRepository,
  ) {}

  public async execute({ search }: ISearchCarsDTO): Promise<Car[]> {
    const cars = await this.carsReporitory.findCarByWord({ search });

    return cars;
  }
}

export { SearchService };
