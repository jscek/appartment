import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateShoppingListDto {

    @IsNumber()
    @IsNotEmpty()
    readonly flat_id: number;
}
