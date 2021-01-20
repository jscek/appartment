import { Module } from '@nestjs/common';
import { ShoppingListCategoryService } from './shopping-list-category.service';
import { ShoppingListCategoryController } from './shopping-list-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingListCategory } from './entities/shopping-list-category.entity';


@Module({
  imports: [TypeOrmModule.forFeature([ShoppingListCategory])],
  controllers: [ShoppingListCategoryController],
  providers: [ShoppingListCategoryService]
})
export class ShoppingListCategoryModule {}
