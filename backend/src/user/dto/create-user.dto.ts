import { IsString } from 'class-validator';
import { Type } from 'class-transformer';


export class CreateUserDto {

    @IsString()
    readonly name: string;

    @IsString()
    readonly avatar: string;
}
