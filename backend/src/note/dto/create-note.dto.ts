import { IsString } from 'class-validator';

export class CreateNoteDto {
    @IsString()
    readonly title: string;

    @IsString()
    readonly description: string;
}
