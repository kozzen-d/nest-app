import z from 'zod';
import { CreateCarSchema } from './car.create.dto';

export const UpdateCarSchema = CreateCarSchema.partial();

export type UpdateCarDto = z.infer<typeof UpdateCarSchema>;
