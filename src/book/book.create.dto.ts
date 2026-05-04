import z from 'zod';

export const CreateBookSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  author: z.string().min(1, 'Author is required'),
  publishedYear: z.coerce
    .number()
    .int()
    .min(1000, 'Year must be after 1000')
    .max(2100),
  price: z.coerce.number().positive('Price must be positive'),
});

export type CreateBookDto = z.infer<typeof CreateBookSchema>;
