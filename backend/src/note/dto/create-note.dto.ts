import { IsNumber, IsString } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsNumber()
  readonly user_Id: number;
}
