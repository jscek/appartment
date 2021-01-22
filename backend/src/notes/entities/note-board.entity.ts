import { Note } from './note.entity';
import { Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Flat } from '../../flats/entities/flat.entity';

@Entity()
export class NoteBoard {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Note, (note) => note.noteBoard)
  notes: Note[];

  @OneToOne(() => Flat, (flat) => flat.noteBoard)
  @JoinColumn({ name: 'flat_id' })
  flat: Flat;
}
