import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Photob64stringService } from './photob64string.service';
import { CreatePhotob64stringDto } from './dto/create-photob64string.dto';
import { UpdatePhotob64stringDto } from './dto/update-photob64string.dto';

@Controller('photob64string')
export class Photob64stringController {
  constructor(private readonly photob64stringService: Photob64stringService) {}

  @Post()
  create(@Body() createPhotob64stringDto: CreatePhotob64stringDto) {
    return this.photob64stringService.create(createPhotob64stringDto);
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
  update(@Param('id') id: string, @Body() updatePhotob64stringDto: UpdatePhotob64stringDto) {
    return this.photob64stringService.update(+id, updatePhotob64stringDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photob64stringService.remove(+id);
  }
}
