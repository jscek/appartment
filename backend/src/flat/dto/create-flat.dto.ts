import { IsString } from 'class-validator';
// import { Type } from 'class-transformer';

export class CreateFlatDto {

    @IsString()
    readonly name: string;
}

