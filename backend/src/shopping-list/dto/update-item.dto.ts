import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateItemDto } from './create-item.dto';

export class UpdateItemDto extends PartialType(OmitType(CreateItemDto, ['user_id'] as const)) {}
