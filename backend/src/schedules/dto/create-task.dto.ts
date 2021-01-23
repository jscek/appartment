import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNumber()
  @IsNotEmpty()
  readonly points: number;

  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
