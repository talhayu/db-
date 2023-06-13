import { Module } from '@nestjs/common';
import { TaecherService } from './taecher.service';
import { TaecherController } from './taecher.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Taecher } from './entities/taecher.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Taecher])],
  controllers: [TaecherController],
  providers: [TaecherService]
})
export class TaecherModule {}
