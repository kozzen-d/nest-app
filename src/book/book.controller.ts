import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { BookService } from './book.service';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe';
import { type CreateBookDto, CreateBookSchema } from './book.create.dto';
import { type UpdateBookDto, UpdateBookSchema } from './book.update.dto';

@Controller('/books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.bookService.findById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body(new ZodValidationPipe(CreateBookSchema)) dto: CreateBookDto) {
    return this.bookService.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ZodValidationPipe(UpdateBookSchema)) dto: UpdateBookDto,
  ) {
    return this.bookService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.bookService.delete(id);
  }
}
