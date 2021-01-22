import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = this.categoriesRepository.create(createCategoryDto);
    return this.categoriesRepository.save(category);
  }

  async createItem(categoryId: number, createItemDto: CreateItemDto): Promise<Item> {
    const category = await this.categoriesRepository.findOne(categoryId);
    if (!category){
      throw new NotFoundException(`Category #${categoryId} not found`);
    }

    const item = this.itemsRepository.create({category: category, ...createItemDto});
    return this.itemsRepository.save(item);
  }

  async findAll(categoryId: number): Promise<Item[]> {
    const category = await this.categoriesRepository.findOne(categoryId, {
      relations: ['items'],
    });
    return category.items;
  }

  // findAllCategories(){
  //   return this.categoriesRepository.find();
  // }

  findOne(itemId: number) {
    return this.itemsRepository.findOne(itemId);
  }

  updateItem(itemId: number, updateItemDto: UpdateItemDto) {
    return this.itemsRepository.save({id: itemId, ...updateItemDto});
  }

  async removeItem(itemId: number): Promise<void> {
    await this.itemsRepository.delete(itemId);
    return;
  }
}
