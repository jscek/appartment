import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserTaskDto {
  @IsNotEmpty()
  @IsNumber()
  readonly week: number;

  @IsBoolean()
  @IsNotEmpty()
  readonly done: boolean;

  @IsNumber()
  readonly user_id: number;
}
