import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { Item } from './entities/item.entity';
import { Category } from './entities/category.entity';
import { ShoppingList} from './entities/shopping-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Item, Category, ShoppingList])],
  controllers: [ItemsController],
  providers: [ItemsService]
})
export class ItemsModule {}
