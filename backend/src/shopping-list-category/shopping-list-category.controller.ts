import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { ShoppingListCategoryService } from './shopping-list-category.service';
import { CreateShoppingListCategoryDto } from './dto/create-shopping-list-category.dto';
import { UpdateShoppingListCategoryDto } from './dto/update-shopping-list-category.dto';

@Controller('shopping-list-category')
export class ShoppingListCategoryController {
  constructor(private readonly shoppingListCategoryService: ShoppingListCategoryService) {}

  @Post()
  create(@Body() createShoppingListCategoryDto: CreateShoppingListCategoryDto) {
    return this.shoppingListCategoryService.create(createShoppingListCategoryDto);
  }

  @Get()
  findAll() {
    return this.shoppingListCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoppingListCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShoppingListCategoryDto: UpdateShoppingListCategoryDto) {
    return this.shoppingListCategoryService.update(+id, updateShoppingListCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppingListCategoryService.remove(+id);
  }
}
