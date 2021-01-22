import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateItemDto {

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsBoolean()
    @IsNotEmpty()
    readonly bought: boolean;

    @IsNumber()
    readonly user_id: number;


}