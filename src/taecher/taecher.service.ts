import { Injectable } from '@nestjs/common';
import { CreateTaecherDto } from './dto/create-taecher.dto';
import { UpdateTaecherDto } from './dto/update-taecher.dto';

@Injectable()
export class TaecherService {
  create(createTaecherDto: CreateTaecherDto) {
    return 'This action adds a new taecher';
  }

  findAll() {
    return `This action returns all taecher`;
  }

  findOne(id: number) {
    return `This action returns a #${id} taecher`;
  }

  update(id: number, updateTaecherDto: UpdateTaecherDto) {
    return `This action updates a #${id} taecher`;
  }

  remove(id: number) {
    return `This action removes a #${id} taecher`;
  }
}
