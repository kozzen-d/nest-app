import z from 'zod';
import { CreateBookSchema } from './book.create.dto';

export const UpdateBookSchema = CreateBookSchema.partial();
export type UpdateBookDto = z.infer<typeof UpdateBookSchema>;
