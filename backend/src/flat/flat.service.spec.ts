import { Test, TestingModule } from '@nestjs/testing';
import { FlatService } from './flat.service';

describe('FlatService', () => {
  let service: FlatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlatService],
    }).compile();

    service = module.get<FlatService>(FlatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
