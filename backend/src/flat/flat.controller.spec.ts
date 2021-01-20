import { Test, TestingModule } from '@nestjs/testing';
import { FlatController } from './flat.controller';
import { FlatService } from './flat.service';

describe('FlatController', () => {
  let controller: FlatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlatController],
      providers: [FlatService],
    }).compile();

    controller = module.get<FlatController>(FlatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
