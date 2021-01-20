import { IsNumber, IsString } from "class-validator";

export class CreateShoppingListCategoryDto {

    @IsString()
    readonly name: string;

    @IsNumber()
    readonly list_Id: number;

}
