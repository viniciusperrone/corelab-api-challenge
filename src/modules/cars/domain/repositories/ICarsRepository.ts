import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import ICreateCatDTO from '../dtos/ICreateCarDTO';
import { ISearchCarsDTO } from '../dtos/ISearchCarsDTO';

export default interface ICarsRepository {
  findCarByWord({ search }: ISearchCarsDTO): Promise<Car[]>;
  create(data: ICreateCatDTO): Promise<Car>;
  // save(car: Car): Promise<Car>;
}
