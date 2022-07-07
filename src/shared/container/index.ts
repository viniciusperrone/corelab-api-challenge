import { container } from 'tsyringe';

import ICarsRepository from '@modules/cars/domain/repositories/ICarsRepository';
import { CarsRepository } from '@modules/cars/infra/typeorm/repositories/CarsRepository';

container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository);
