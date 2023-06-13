import { Test, TestingModule } from '@nestjs/testing';
import { TaecherController } from './taecher.controller';
import { TaecherService } from './taecher.service';

describe('TaecherController', () => {
  let controller: TaecherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaecherController],
      providers: [TaecherService],
    }).compile();

    controller = module.get<TaecherController>(TaecherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
