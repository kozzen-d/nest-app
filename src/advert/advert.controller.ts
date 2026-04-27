import { Controller, Get } from '@nestjs/common';
import { AdvertService } from './advert.service';

@Controller('adverts')
export class AdvertController {
  constructor(private readonly advertService: AdvertService) {}

  @Get()
  findAll() {
    return this.advertService.findAll();
  }
}
