import { PartialType } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class AddScoreUserDto {
  @IsNumber()
  readonly score: number;
}
