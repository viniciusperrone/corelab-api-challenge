import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { CreateCars } from './migrations';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';

dotenv.config();

export const dataSource = new DataSource({
  name: 'default',
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT) || 5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  migrations: [CreateCars],
  entities: [Car],
});
