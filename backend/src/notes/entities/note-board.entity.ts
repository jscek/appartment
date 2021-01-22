import { Note } from './note.entity';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Flat } from '../../flats/entities/flat.entity';

@Entity()
export class NoteBoard {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Note, (note) => note.noteBoard)
  notes: Note[];

  @ManyToOne(() => Flat, (flat) => flat.noteBoard)
  flat: Flat;
}
