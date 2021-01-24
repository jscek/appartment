import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Flat } from 'src/flats/entities/flat.entity';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';
import { ShoppingList } from './entities/shopping-list.entity';

@Injectable()
export class ShoppingListService {
  constructor(
    @InjectRepository(ShoppingList)
    private shoppingListRepository: Repository<ShoppingList>,
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  async createList(flat: Flat): Promise<ShoppingList> {
    const shoppingL = this.shoppingListRepository.create({ flat });
    return this.shoppingListRepository.save(shoppingL);
  }

  async createItem(listId: number, createItemDto: CreateItemDto, user: User): Promise<Item> {
    const listSh = await this.shoppingListRepository.findOne(listId);
    if (!listSh) {
      throw new NotFoundException(`ShoppingLIst #${listId} not found`);
    }
    const item = this.itemRepository.create({ shoppingList: listSh, user, ...createItemDto });
    return this.itemRepository.save(item);
  }

  async findAllItemsOfList(listId: number): Promise<Item[]> {
    const shoppingList = await this.shoppingListRepository.findOne(listId, {
      relations: ['items'],
    });
    if (!shoppingList) {
      throw new NotFoundException(`list #${listId} not found`);
    }
    return shoppingList.items;
  }

  async findAllLists() {
    return this.shoppingListRepository.find();
  }

  async findAllItems() {
    return this.itemRepository.find();
  }

  async findOneItem(itemId: number): Promise<Item> {
    const item = await this.itemRepository.findOne(itemId);
    if (!item) {
      throw new NotFoundException(`Item #${itemId} not found`);
    }
    return this.itemRepository.findOne(itemId);
  }

  async updateItem(itemId: number, updateItemDto: UpdateItemDto): Promise<Item> {
    console.log('Updating item: ', updateItemDto);
    await this.itemRepository.update(itemId, { ...updateItemDto });

    return this.findOneItem(itemId);
  }

  async removeItem(itemId: number): Promise<void> {
    console.log('Got itemId to delete: ', itemId);
    await this.itemRepository.delete(itemId);
  }

  async removeList(listId: number): Promise<void> {
    console.log('Got listId to delete: ', listId);
    await this.shoppingListRepository.delete(listId);
  }
}
