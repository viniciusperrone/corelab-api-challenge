import { Repository } from 'typeorm';
import dotenv from 'dotenv';
import { dataSource } from '@shared/infra/typeorm/database';
import { Car } from '../entities/Car';
import ICarsRepository from '@modules/cars/domain/repositories/ICarsRepository';
import { ICreateCarDTO } from '@modules/cars/domain/dtos/ICreateCarDTO';
import { ISearchCarsDTO } from '@modules/cars/domain/dtos/ISearchCarsDTO';

dotenv.config();

class CarsRepository implements ICarsRepository {
  private databaseRepository: Repository<Car>;

  constructor() {
    this.databaseRepository = dataSource.getRepository(Car);
  }

  public async findById(id: string): Promise<Car | null> {
    const car = await this.databaseRepository.findOne({ where: { id } });

    return car;
  }

  public async findCarByWord({ search }: ISearchCarsDTO): Promise<Car[]> {
    if (typeof search !== 'number') {
      const cars = (await this.databaseRepository.query(
        `SELECT * FROM cars WHERE '${search}' in (name, brand, color, plate);`,
      )) as Car[];

      return cars;
    } else {
      const cars = (await this.databaseRepository.query(
        `SELECT * FROM cars WHERE '${search}' in (year);`,
      )) as Car[];

      return cars;
    }
  }

  public async create(carData: ICreateCarDTO): Promise<Car> {
    const car = this.databaseRepository.create(carData);

    await this.databaseRepository.save(car);

    return car;
  }

  public async save(car: Car): Promise<Car> {
    await this.databaseRepository.save(car);

    return car;
  }
}

export { CarsRepository };
