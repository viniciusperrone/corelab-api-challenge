import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import ICreateCatDTO from '../dtos/ICreateCarDTO';

export default interface ICarsRepository {
  // findCarByWord(search: string): Promise<Car | null>;
  create(data: ICreateCatDTO): Promise<Car>;
  // save(car: Car): Promise<Car>;
}
