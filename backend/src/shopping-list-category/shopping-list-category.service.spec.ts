import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingListCategoryService } from './shopping-list-category.service';

describe('ShoppingListCategoryService', () => {
  let service: ShoppingListCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoppingListCategoryService],
    }).compile();

    service = module.get<ShoppingListCategoryService>(ShoppingListCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
