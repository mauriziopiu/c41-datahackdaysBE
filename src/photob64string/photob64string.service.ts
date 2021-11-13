import { Injectable } from '@nestjs/common';
import { CreatePhotob64stringDto } from './dto/create-photob64string.dto';
import { UpdatePhotob64stringDto } from './dto/update-photob64string.dto';

@Injectable()
export class Photob64stringService {
  private pictures: string[] = [];

  create(b64string: string) {
    this.pictures.push(b64string);
    return this.pictures;
  }

  findAll() {
    return `This action returns all photob64string`;
  }

  findOne(id: number) {
    return `This action returns a #${id} photob64string`;
  }

  update(id: number, updatePhotob64stringDto: UpdatePhotob64stringDto) {
    return `This action updates a #${id} photob64string`;
  }

  remove(id: number) {
    return `This action removes a #${id} photob64string`;
  }
}
