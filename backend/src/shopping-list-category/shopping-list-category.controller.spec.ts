import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingListCategoryController } from './shopping-list-category.controller';
import { ShoppingListCategoryService } from './shopping-list-category.service';

describe('ShoppingListCategoryController', () => {
  let controller: ShoppingListCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingListCategoryController],
      providers: [ShoppingListCategoryService],
    }).compile();

    controller = module.get<ShoppingListCategoryController>(ShoppingListCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
