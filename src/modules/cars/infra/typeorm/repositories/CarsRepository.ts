import { Repository } from 'typeorm';
import { dataSource } from '@shared/infra/typeorm/database';
import { Car } from '../entities/Car';
import ICarsRepository from '@modules/cars/domain/repositories/ICarsRepository';
import ICreateCarDTO from '@modules/cars/domain/dtos/ICreateCarDTO';

class CarsRepository implements ICarsRepository {
  private databaseRepository: Repository<Car>;

  constructor() {
    this.databaseRepository = dataSource.getRepository(Car);
  }

  public async create(carData: ICreateCarDTO): Promise<Car> {
    const car = this.databaseRepository.create(carData);

    await this.databaseRepository.save(car);

    return car;

  }
  // save(car: Car): Promise<Car> {}
  // findCarByWord(search: string): Promise<Car | null> {}
}

export { CarsRepository };
