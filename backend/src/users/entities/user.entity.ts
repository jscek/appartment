import { Flat } from '../../flats/entities/flat.entity';
import { Note } from '../../notes/entities/note.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  avatar: string;

  // user -* note
  @OneToMany(() => Note, (note) => note.user)
  notes: Note[];

  // user *- flat
  @ManyToOne(() => Flat)
  @JoinColumn({ name: 'flat_id' })
  flat: Flat;
}
