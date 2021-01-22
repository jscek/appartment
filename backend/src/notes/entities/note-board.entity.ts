import { Note } from './note.entity';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NoteBoard {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Note, (note) => note.note_board)
  notes: Note[];
}
