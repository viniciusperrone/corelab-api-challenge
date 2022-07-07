import { injectable as Injectable, inject as Inject } from 'tsyringe';
import { Car } from '../infra/typeorm/entities/Car';
import ICarsRepository from '../domain/repositories/ICarsRepository';
import { IUpdateCarDTO } from '../domain/dtos/IUpdateCarDTO';

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
    price,
    description,
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
    car.price = price;
    car.description = description;

    await this.carsReporitory.save(car);

    return car;
  }
}

export { UpdateCarService };
