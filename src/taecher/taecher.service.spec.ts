import { Test, TestingModule } from '@nestjs/testing';
import { TaecherService } from './taecher.service';

describe('TaecherService', () => {
  let service: TaecherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaecherService],
    }).compile();

    service = module.get<TaecherService>(TaecherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
