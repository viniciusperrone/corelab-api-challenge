import { Request, Response } from 'express';

class CarsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, brand, color, year, plate } = request.body;

    return response.json({
      name,
      brand,
      color,
      year,
      plate,
    });
  }
}

export { CarsController };
