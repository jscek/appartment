import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShoppingListCategoryDto } from './dto/create-shopping-list-category.dto';
import { UpdateShoppingListCategoryDto } from './dto/update-shopping-list-category.dto';
import { ShoppingListCategory } from './entities/shopping-list-category.entity';

@Injectable()
export class ShoppingListCategoryService {
  constructor(
    @InjectRepository(ShoppingListCategory)
    private shopListCatRepository: Repository<ShoppingListCategory>,
  ) {}

  create(createShoppingListCategoryDto: CreateShoppingListCategoryDto) {
    const shoppingLC = this.shopListCatRepository.create(createShoppingListCategoryDto);
    return this.shopListCatRepository.save(shoppingLC);
  }

  findAll() {
    return this.shopListCatRepository.find();
  }

  findOne(id: number) {
    return this.shopListCatRepository.findOne(id);
  }

  update(id: number, updateShoppingListCategoryDto: UpdateShoppingListCategoryDto) {
    console.log(updateShoppingListCategoryDto);
    return this.shopListCatRepository.update(id, updateShoppingListCategoryDto);
  }

  async remove(id: number): Promise<void> {
    console.log("Got shoppingL_Id to delete: ", id)
    await this.shopListCatRepository.delete(id);
  }
}
