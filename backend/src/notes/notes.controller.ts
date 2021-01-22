import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { CreateNoteBoardDto } from './dto/create-note-board.dto';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Post('boards')
  async createBoard(@Body() createNoteBoardDto: CreateNoteBoardDto) {
    return this.notesService.createBoard(createNoteBoardDto);
  }

  @Get('boards/:noteBoardId')
  async findAll(@Param('noteBoardId') noteBoardId: number) {
    return this.notesService.findAll(noteBoardId);
  }

  @Post('boards/:noteBoardId')
  async createNote(
    @Param('noteBoardId') noteBoardId: number,
    @Body() createNoteDto: CreateNoteDto,
  ) {
    return this.notesService.createNote(noteBoardId, createNoteDto);
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
