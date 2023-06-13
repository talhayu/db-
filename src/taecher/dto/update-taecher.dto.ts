import { PartialType } from '@nestjs/mapped-types';
import { CreateTaecherDto } from './create-taecher.dto';

export class UpdateTaecherDto extends PartialType(CreateTaecherDto) {}
