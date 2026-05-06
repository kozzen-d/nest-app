import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ZodValidationPipe } from 'nestjs-zod';        // ← Pipe, не Exception

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ZodValidationPipe());          // ← без аргументов
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
