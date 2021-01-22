import { IsString } from 'class-validator';

export class CreateFlatDto {
  @IsString()
  readonly name: string;
}
