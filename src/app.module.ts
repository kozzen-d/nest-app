import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { AdvertModule } from './advert/advert.module';
import { ArtifactModule } from './artifact/artifact.module';
import { CarModule } from './car/car.module';
import { ConfigModule } from '@nestjs/config';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ArticleModule,
    AdvertModule,
    ArtifactModule,
    CarModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
