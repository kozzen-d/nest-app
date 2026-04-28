import { Injectable } from '@nestjs/common';
import { Advert } from './advert.interface';

@Injectable()
export class AdvertRepository {
  private adverts: Advert[] = [
    {
      id: 0,
      image: 'https://example.com/banner1.jpg',
      content: 'Купите наш продукт со скидкой 50%',
      link: 'https://example.com/product',
    },
    {
      id: 1,
      image: 'https://example.com/banner2.jpg',
      content: 'Новая коллекция уже в продаже',
      link: 'https://example.com/collection',
    },
  ];

  private idCounter = 2;

  findAll(): Advert[] {
    return this.adverts;
  }
}
