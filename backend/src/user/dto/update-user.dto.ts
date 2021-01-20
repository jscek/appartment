import { OmitType, PartialType } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(
    // OmitType(CreateUserDto, ['name', 'avatar'] as const),
    CreateUserDto
) {
    
    @IsNumber()
    readonly flat_Id: number;
}
