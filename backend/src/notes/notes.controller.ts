import {
  Body,
  Request,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateNoteBoardDto } from './dto/create-note-board.dto';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get('boards/:noteBoardId')
  async findAll(@Param('noteBoardId') noteBoardId: number) {
    return this.notesService.findAll(noteBoardId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('boards/:noteBoardId')
  async createNote(
    @Param('noteBoardId') noteBoardId: number,
    @Request() req,
    @Body() createNoteDto: CreateNoteDto,
  ) {
    const userId = req.user.id;
    return this.notesService.createNote(noteBoardId, userId, createNoteDto);
  }

  @Get(':noteId')
  async findOne(@Param('noteId') noteId: number) {
    return this.notesService.findOne(noteId);
  }

  @Patch(':noteId')
  async updateNote(@Param('noteId') noteId: number, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.updateNote(noteId, updateNoteDto);
  }

  @Delete(':noteId')
  @HttpCode(204)
  async deleteNote(@Param('noteId') noteId: number) {
    return this.notesService.deleteNote(noteId);
  }
}
