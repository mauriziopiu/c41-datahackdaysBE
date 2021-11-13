import {
  Controller,
  Get,
  Post,
  Res,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('photos')
export class PhotosController {
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('photo', {
      dest: './uploads',
    }),
  )
  uploadSingle(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }

  @Get()
  getFile(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'package.json'));
    return new StreamableFile(file);
  }
}
