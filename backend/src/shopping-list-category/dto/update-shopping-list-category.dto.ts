import { PartialType } from '@nestjs/swagger';
import { CreateShoppingListCategoryDto } from './create-shopping-list-category.dto';

export class UpdateShoppingListCategoryDto extends PartialType(CreateShoppingListCategoryDto) {}
