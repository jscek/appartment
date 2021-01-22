import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteBoardDto } from './dto/create-note-board.dto';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NoteBoard } from './entities/note-board.entity';
import { Note } from './entities/note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
    @InjectRepository(NoteBoard)
    private noteBoardsRepository: Repository<NoteBoard>,
  ) {}

  async createBoard(createNoteBoardDto: CreateNoteBoardDto): Promise<NoteBoard> {
    const noteBoard = this.noteBoardsRepository.create(createNoteBoardDto);
    return this.noteBoardsRepository.save(noteBoard);
  }

  async createNote(noteBoardId: number, createNoteDto: CreateNoteDto): Promise<Note> {
    const noteBoard = await this.noteBoardsRepository.findOne(noteBoardId);
    if (!noteBoard) {
      throw new NotFoundException(`NoteBoard #${noteBoardId} not found`);
    }

    const note = this.notesRepository.create({ note_board: noteBoard, ...createNoteDto });

    return this.notesRepository.save(note);
  }

  async findOne(noteId: number): Promise<Note> {
    const noteBoard = await this.notesRepository.findOne(noteId);
    if (!noteBoard) {
      throw new NotFoundException(`Note #${noteId} not found`);
    }

    return this.notesRepository.findOne(noteId);
  }

  async findAll(noteBoardId: number): Promise<Note[]> {
    const noteBoard = await this.noteBoardsRepository.findOne(noteBoardId, {
      relations: ['notes'],
    });
    if (!noteBoard) {
      throw new NotFoundException(`NoteBoard #${noteBoardId} not found`);
    }

    return noteBoard.notes;
  }

  async updateNote(noteId: number, updateNoteDto: UpdateNoteDto): Promise<Note> {
    const note = await this.findOne(noteId);

    return this.notesRepository.save({ id: noteId, ...updateNoteDto });
  }

  async deleteNote(noteId: number): Promise<void> {
    const note = await this.notesRepository.findOne(noteId);
    if (!note) {
      throw new NotFoundException(`Note #${noteId} not found`);
    }

    await this.notesRepository.remove(note);
    return;
  }
}
