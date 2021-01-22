import { IsNumber } from "class-validator";

export class CreateShoppingListDto {

    @IsNumber()
    readonly flat_Id: number;
}
