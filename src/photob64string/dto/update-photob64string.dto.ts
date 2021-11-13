import { PartialType } from '@nestjs/mapped-types';
import { CreatePhotob64stringDto } from './create-photob64string.dto';

export class UpdatePhotob64stringDto extends PartialType(CreatePhotob64stringDto) {}
