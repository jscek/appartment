import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
import { ShoppingList } from './entities/shopping-list.entity';

@Injectable()
export class ShoppingListService {
  constructor(
    @InjectRepository(ShoppingList)
    private shoppingListRepository: Repository<ShoppingList>,
  ) {}

  create(createShoppingListDto: CreateShoppingListDto) {
    const shoppingL = this.shoppingListRepository.create(createShoppingListDto);
    return this.shoppingListRepository.save(shoppingL);
  }

  findAll() {
    return this.shoppingListRepository.find();
  }

  findOne(id: number) {
    return this.shoppingListRepository.findOne(id);
  }

  update(id: number, updateShoppingListDto: UpdateShoppingListDto) {
    console.log(updateShoppingListDto);
    return this.shoppingListRepository.update(id, updateShoppingListDto);
  }

  async remove(id: number): Promise<void> {
    console.log("Got shoppingL_Id to delete: ", id)
    await this.shoppingListRepository.delete(id);
  }
}
