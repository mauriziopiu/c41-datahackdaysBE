import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Photob64stringModule } from './photob64string/photob64string.module';

@Module({
  imports: [Photob64stringModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
