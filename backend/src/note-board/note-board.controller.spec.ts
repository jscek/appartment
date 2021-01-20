import { Test, TestingModule } from '@nestjs/testing';
import { NoteBoardController } from './note-board.controller';

describe('NoteBoardController', () => {
  let controller: NoteBoardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoteBoardController],
    }).compile();

    controller = module.get<NoteBoardController>(NoteBoardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
