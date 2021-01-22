// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { ShoppingListService } from './shopping-list.service';
// import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
// import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
// // import { CreateCategoryDto } from './dto/create-category.dto';

// @Controller()
// export class ShoppingListController {
//   constructor(private readonly shoppingListService: ShoppingListService) {}

//   @Post('lists')
//   // async createCategory(@Body() createCategory: CreateCategoryDto) {
//   //   return this.shoppingListService.createCategory(createCategory);
//   //   @Post()
//     create(@Body() createShoppingListDto: CreateShoppingListDto) {
//       return this.shoppingListService.create(createShoppingListDto);
//   }

//   @Post('lists/:categoryId"')
//     async createCategory(
//       @Param('categoryId') categoryId: number,
//       // @Body() createCategoryDto: CreateCategoryDto
//     ) {
//       // return this.shoppingListService.createCategory(categoryId, createCategoryDto);
//   }

//   @Get()
//   findAll() {
//     return this.shoppingListService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.shoppingListService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateShoppingListDto: UpdateShoppingListDto) {
//     return this.shoppingListService.updateList(+id, updateShoppingListDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.shoppingListService.removeList(+id);
//   }
// }
