import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserTaskDto {
  @IsNotEmpty()
  @IsNumber()
  readonly month: number;

  @IsNumber()
  readonly day: number;

  @IsBoolean()
  @IsNotEmpty()
  readonly done: boolean;

  @IsNumber()
  readonly user_id: number;
}
