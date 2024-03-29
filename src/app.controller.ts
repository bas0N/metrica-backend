import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/check')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/check-ci-cd')
  getHello1(): string {
    return 'works';
  }
}
