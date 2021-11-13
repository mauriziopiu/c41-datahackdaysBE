import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Photob64stringService } from './photob64string.service';
import { CreatePhotob64stringDto } from './dto/create-photob64string.dto';
import { UpdatePhotob64stringDto } from './dto/update-photob64string.dto';

@Controller('picture')
export class Photob64stringController {
  constructor(private readonly photob64stringService: Photob64stringService) {}

  @Post()
  create(@Body() b64string: CreatePhotob64stringDto) {
    console.log(b64string);
    return this.photob64stringService.create(b64string.image);
  }

  @Get()
  findAll() {
    return this.photob64stringService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.photob64stringService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePhotob64stringDto: UpdatePhotob64stringDto,
  ) {
    return this.photob64stringService.update(+id, updatePhotob64stringDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photob64stringService.remove(+id);
  }
}
