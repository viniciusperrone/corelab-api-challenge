import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCars1657153602764 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'cars',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar(255)',
          },
          {
            name: 'brand',
            type: 'varchar(255)',
          },
          {
            name: 'color',
            type: 'varchar(255)',
          },
          {
            name: 'year',
            type: 'int',
          },
          {
            name: 'plate',
            type: 'varchar(255)',
          },
          {
            name: 'price',
            type: 'float',
          },
          {
            name: 'description',
            type: 'varchar(255)',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cars');
  }
}
