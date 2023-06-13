import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaecherService } from './taecher.service';
import { CreateTaecherDto } from './dto/create-taecher.dto';
import { UpdateTaecherDto } from './dto/update-taecher.dto';

@Controller('taecher')
export class TaecherController {
  constructor(private readonly taecherService: TaecherService) {}

  @Post()
  create(@Body() createTaecherDto: CreateTaecherDto) {
    return this.taecherService.create(createTaecherDto);
  }

  @Get()
  findAll() {
    return this.taecherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taecherService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaecherDto: UpdateTaecherDto) {
    return this.taecherService.update(+id, updateTaecherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taecherService.remove(+id);
  }
}
