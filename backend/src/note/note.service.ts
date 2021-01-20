import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>,
  ) {}

  create(createNoteDto: CreateNoteDto): Promise<Note> {
    const note = this.notesRepository.create(createNoteDto);
    return this.notesRepository.save(note);
  }

  findAll(): Promise<Note[]> {
    return this.notesRepository.find();
  }

  async findOne(id: number): Promise<Note> {
    const note = await this.notesRepository.findOne(id);
    if (!note) {
      throw new NotFoundException(`Note ${id} not found`);
    }

    return note;
  }

  async update(id: number, updateNoteDto: UpdateNoteDto): Promise<Note> {
    const note = await this.notesRepository.preload({ id, ...updateNoteDto });
    if (!note) {
      throw new NotFoundException(`Note ${id} not found`);
    }

    return this.notesRepository.save(note);
  }

  async remove(id: number) {
    const note = await this.findOne(id);
    this.notesRepository.remove(note);
  }
}
