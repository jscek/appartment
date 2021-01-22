// import { Injectable,NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
// // import { CreateCategoryDto } from './dto/create-category.dto';
// import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
// // import { Category } from './entities/category.entity';
// import { ShoppingList } from './entities/shopping-list.entity';

// @Injectable()
// export class ShoppingListService {
//   constructor(
//     @InjectRepository(ShoppingList)
//     private shoppingListRepository: Repository<ShoppingList>,
//     // @InjectRepository(Category)
//     // private categoryRepository: Repository<Category>,
//   ) {}

//   // async createCategory(categoryId: number, createCategoryDto: CreateCategoryDto): Promise<Category> {
//   //   const category = this.categoryRepository.create(createCategoryDto);
//   //   return this.categoryRepository.save(category);
//   // }

//   async create(createShoppingListDto: CreateShoppingListDto) {
//     const shoppingL = this.shoppingListRepository.create(createShoppingListDto);
//     return this.shoppingListRepository.save(shoppingL);
//   }


//   findAll() {
//     return this.shoppingListRepository.find();
//   }

//   findOne(id: number) {
//     return this.shoppingListRepository.findOne(id);
//   }

//   updateList(id: number, updateShoppingListDto: UpdateShoppingListDto) {
//     console.log(updateShoppingListDto);
//     return this.shoppingListRepository.update(id, updateShoppingListDto);
//   }

//   async removeList(id: number): Promise<void> {
//     console.log("Got shoppingL_Id to delete: ", id)
//     await this.shoppingListRepository.delete(id);
//   }
// }
