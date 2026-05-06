import { createZodDto } from 'nestjs-zod';
import z from 'zod';

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10, 'Min password length is 10 symbols'),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(10, 'Min password length is 10 symbols'),
});

export class RegisterDto extends createZodDto(RegisterSchema) {}
export class LoginDto extends createZodDto(LoginSchema) {}
