import { Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { BookCreateInput, BookUpdateInput } from './book.interface';

@Injectable()
export class BookRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Book[]> {
    return this.prisma.book.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  findById(id: number): Promise<Book | null> {
    return this.prisma.book.findUnique({ where: { id } });
  }

  create(data: BookCreateInput): Promise<Book> {
    return this.prisma.book.create({ data });
  }

  update(id: number, data: BookUpdateInput): Promise<Book> {
    return this.prisma.book.update({ where: { id }, data });
  }

  delete(id: number): Promise<Book> {
    return this.prisma.book.delete({ where: { id } });
  }
}
