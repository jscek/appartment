import { Controller, Get, Post, Body, Put, Param, Delete, Patch } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post('categories')
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.itemsService.createCategory(createCategoryDto);
  }

  @Post('categories/:categoryId')
  async createItem(
    @Param('categoryId') categoryId: number,
    @Body() createItemDto: CreateItemDto,
  ) {
    return this.itemsService.createItem(categoryId, createItemDto);
  }

  @Post('shoppingList')

  // get all item for specified category
  @Get('categories/:categoryId')
  async findAll(@Param('categoryId') categoryId: number) {
    return this.itemsService.findAll(categoryId);
  }

  //get note by id
  @Get(':itemId')
  async findOne(@Param('itemId') itemId: number) {
    return this.itemsService.findOne(itemId);
  }

  //get all categories
  // @Get('categories')
  // async findAllCategories(){
  //   return this.itemsService.findAllCategories();
  // }

  @Patch(':itemId')
  update(@Param('itemId') itemId: number, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.updateItem(itemId, updateItemDto);
  }

  @Delete(':itemId')
  remove(@Param('itemId') itemId: number) {
    return this.itemsService.removeItem(itemId);
  }
}
