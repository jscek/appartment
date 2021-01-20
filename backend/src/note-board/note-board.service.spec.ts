import { Test, TestingModule } from '@nestjs/testing';
import { NoteBoardService } from './note-board.service';

describe('NoteBoardService', () => {
  let service: NoteBoardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoteBoardService],
    }).compile();

    service = module.get<NoteBoardService>(NoteBoardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
