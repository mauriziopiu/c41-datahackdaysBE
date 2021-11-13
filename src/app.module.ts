import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotosController } from './photos/photos.controller';
import { PhotosModule } from './photos/photos.module';

@Module({
  imports: [PhotosModule],
  controllers: [AppController, PhotosController],
  providers: [AppService],
})
export class AppModule {}
