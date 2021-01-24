import {
  Controller,
  Request,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ShoppingListService } from './shopping-list.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { request } from 'express';

@Controller('shopping-list')
export class ShoppingListController {
  constructor(private readonly shoppingListService: ShoppingListService) {}

  @Post(':listId')
  @UseGuards(JwtAuthGuard)
  async createItem(
    @Request() req,
    @Param('listId') listId: number,
    @Body() createItemDto: CreateItemDto,
  ) {
    return this.shoppingListService.createItem(listId, createItemDto, req.user);
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
  @UseGuards(JwtAuthGuard)
  async updateItem(@Param('itemId') itemId: number, @Body() updateItemDto: UpdateItemDto) {
    return this.shoppingListService.updateItem(itemId, updateItemDto);
  }

  @Delete('items/:itemId')
  async removeItem(@Param('itemId') itemId: number) {
    return this.shoppingListService.removeItem(itemId);
  }

  @Delete(':listId')
  async removeList(@Param('listId') listId: number) {
    return this.shoppingListService.removeList(listId);
  }
}
