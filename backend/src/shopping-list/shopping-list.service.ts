import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
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

  async createList(createShoppingListDto: CreateShoppingListDto): Promise<ShoppingList> {
    const shoppingL = this.shoppingListRepository.create(createShoppingListDto);
    return this.shoppingListRepository.save(shoppingL);
  }

  async createItem(listId: number, createItemDto: CreateItemDto): Promise<Item> {
    const listSh = await this.shoppingListRepository.findOne(listId);
    console.log('LIst Id', listId, ' and list: ', listSh);
    if (!listSh) {
      throw new NotFoundException(`ShoppingLIst #${listId} not found`);
    }
    const item = this.itemRepository.create({ shoppingList: listSh, ...createItemDto });
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
    const listSh = await this.itemRepository.findOne(itemId);
    if (!listSh) {
      throw new NotFoundException(`Item #${itemId} not found`);
    }
    return this.itemRepository.findOne(itemId);
  }

  async updateItem(itemId: number, updateItemDto: UpdateItemDto): Promise<Item> {
    console.log('Updating item: ', updateItemDto);
    const item = await this.findOneItem(itemId);

    return this.itemRepository.save({ id: itemId, ...updateItemDto });
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
