import { Controller, Post } from '@nestjs/common';
import { NoteBoardService } from './note-board.service';

@Controller('note-board')
export class NoteBoardController {
  constructor(private noteBoardService: NoteBoardService) {}

  @Post()
  create() {
    return this.noteBoardService.create();
  }
}
