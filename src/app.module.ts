import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/entities/user.entity';
import { TaecherModule } from './taecher/taecher.module';
import { Taecher } from './taecher/entities/taecher.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'practice',
      password: 'talha',
      database: 'practice',
      entities: [UserEntity, Taecher],
      synchronize: true,
    }),
    UserModule,
    TaecherModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
