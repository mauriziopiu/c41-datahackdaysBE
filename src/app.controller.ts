import { Controller, Get, Res } from '@nestjs/common';
import path from 'path';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() response): string {
    return 'hello';
  }
}
