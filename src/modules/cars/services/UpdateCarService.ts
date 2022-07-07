import { injectable as Injectable, inject as Inject } from 'tsyringe';
import { IUpdateCarDTO } from '../domain/dtos/IUpdateCarDTO';
import ICarsRepository from '../domain/repositories/ICarsRepository';
import { Car } from '../infra/typeorm/entities/Car';

@Injectable()
class UpdateCarService {
  constructor(
    @Inject('CarsRepository')
    private carsReporitory: ICarsRepository,
  ) {}

  public async execute({
    id,
    name,
    brand,
    color,
    year,
    plate,
  }: IUpdateCarDTO): Promise<Car | null> {
    const car = await this.carsReporitory.findById(id);

    if (!car) {
      return null;
    }

    car.name = name;
    car.brand = brand;
    car.color = color;
    car.year = year;
    car.plate = plate;

    await this.carsReporitory.save(car);

    return car;
  }
}

export { UpdateCarService };
