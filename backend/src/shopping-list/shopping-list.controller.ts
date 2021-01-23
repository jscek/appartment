import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShoppingListService } from './shopping-list.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('shopping-list')
export class ShoppingListController {
  constructor(private readonly shoppingListService: ShoppingListService) {}

  @Post(':listId')
  async createItem(@Param('listId') listId: number, @Body() createItemDto: CreateItemDto) {
    return this.shoppingListService.createItem(listId, createItemDto);
  }

  @Get(':listId/items')
  async findAllItemsOfList(@Param('listId') listId: number) {
    return this.shoppingListService.findAllItemsOfList(listId);
  }

  @Get()
  async findAllLists() {
    return this.shoppingListService.findAllLists();
  }

  @Get('items')
  async findAllItems() {
    return this.shoppingListService.findAllItems();
  }

  @Get('items/:itemId')
  async findOneItem(@Param('itemId') itemId: number) {
    return this.shoppingListService.findOneItem(itemId);
  }

  @Patch('items/:itemId')
  async updateItem(@Param('itemId') itemId: number, @Body() updateItemDto: UpdateItemDto) {
    return this.shoppingListService.updateItem(itemId, updateItemDto);
  }

  @Delete('items/:itemId')
  async removeItem(@Param('itemId') itemId: number) {
    return this.shoppingListService.removeItem(itemId);
  }

  //nie dziala (trzeba wymyslic jak usunac wszyskie itemy razem z lista)
  @Delete(':listId')
  async removeList(@Param('listId') listId: number) {
    return this.shoppingListService.removeList(listId);
  }
}
