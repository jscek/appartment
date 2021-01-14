import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>
  ) {}

  create(createNoteDto: CreateNoteDto) {
    const note = this.notesRepository.create(createNoteDto);
    return this.notesRepository.save(note);
  }

  findAll() {
    return `This action returns all note`;
  }

  findOne(id: number) {
    return this.notesRepository.findOne(id)
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    console.log(updateNoteDto);
    return this.notesRepository.update(id, updateNoteDto);
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
