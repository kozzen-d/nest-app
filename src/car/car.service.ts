import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateCarDto } from './car.create.dto';
import { UpdateCarDto } from './car.update.dto';
import { Car } from 'generated/prisma/client';
import { CarRepository } from './car.repository';

@Injectable()
export class CarService {
  CarRepository: any;
  constructor(private readonly repo: CarRepository) {}

  async findAll() {
    return this.repo.findAll();
  }

  async findById(id: number) {
    const car = await this.repo.findById(id);
    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    return car;
  }

  async create(carDto: CreateCarDto) {
    return this.repo.create(carDto);
  }

  async update(id: number, dto: UpdateCarDto): Promise<Car> {
    await this.findById(id); // кинет 404, если нет
    return this.repo.update(id, dto);
  }

  async delete(id: number) {
    const car = await this.repo.findById(id);
    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    return this.repo.delete(car.id);
  }
}
