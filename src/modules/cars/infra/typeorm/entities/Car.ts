import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cars')
class Car {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  color: string;

  @Column('int')
  year: number;

  @Column()
  plate: string;
}

export { Car };
