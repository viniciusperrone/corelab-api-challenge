import { injectable as Injectable, inject as Inject } from 'tsyringe';
import ICreateCarDTO from '../domain/dtos/ICreateCarDTO';
import ICarsRepository from '../domain/repositories/ICarsRepository';
import { Car } from '../infra/typeorm/entities/Car';

@Injectable()
class CreateCarService {
  constructor(
    @Inject('CarsRepository')
    private carsReporitory: ICarsRepository,
  ) {}

  public async execute(data: ICreateCarDTO): Promise<Car> {
    const car = await this.carsReporitory.create({ ...data });

    return car;
  }
}

export { CreateCarService };
