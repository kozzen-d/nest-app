import { Injectable, NotFoundException } from '@nestjs/common';
import { BookRepository } from './book.repository';
import { CreateBookDto } from './book.create.dto';
import { UpdateBookDto } from './book.update.dto';
import { Book } from 'generated/prisma/client';

@Injectable()
export class BookService {
  constructor(private readonly repo: BookRepository) {}

  findAll(): Promise<Book[]> {
    return this.repo.findAll();
  }

  async findById(id: number): Promise<Book> {
    const book = await this.repo.findById(id);
    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    return book;
  }

  create(dto: CreateBookDto): Promise<Book> {
    return this.repo.create(dto);
  }

  async update(id: number, dto: UpdateBookDto): Promise<Book> {
    await this.findById(id); // кинет 404, если нет
    return this.repo.update(id, dto);
  }

  async delete(id: number): Promise<Book> {
    await this.findById(id);
    return this.repo.delete(id);
  }
}
