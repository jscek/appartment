import { Flat } from '../../flat/entities/flat.entity';
import { Note } from '../../notes/entities/note.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  avatar: string;

  // user -* note
  @OneToMany(() => Note, (note) => note.user)
  notes: Note[];

  // user *- flat
  @ManyToOne(() => Flat)
  @JoinColumn({ name: 'flat_Id' })
  flat: Flat;

  @Column({ type: 'int', nullable: true })
  flat_Id: number;
}
