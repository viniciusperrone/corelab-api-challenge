import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICreateCarDTO } from '../dtos/ICreateCarDTO';
import { ISearchCarsDTO } from '../dtos/ISearchCarsDTO';

export default interface ICarsRepository {
  findById(id: string): Promise<Car | null>;
  findCarByWord({ search }: ISearchCarsDTO): Promise<Car[]>;
  create(data: ICreateCarDTO): Promise<Car>;
  save(car: Car): Promise<Car>;
}
