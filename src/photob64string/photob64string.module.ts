import { Module } from '@nestjs/common';
import { Photob64stringService } from './photob64string.service';
import { Photob64stringController } from './photob64string.controller';

@Module({
  controllers: [Photob64stringController],
  providers: [Photob64stringService],
})
export class Photob64stringModule {}
