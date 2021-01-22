import { Flat } from '../../flat/entities/flat.entity';
import { Note } from '../../notes/entities/note.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from 'src/items/entities/item.entity';

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

  // user -* item
  @OneToMany(() => Item, (item) => item.user)
  items: Item[];


  // user *- flat
  @ManyToOne(() => Flat)
  @JoinColumn({ name: 'flat_id' })
  flat: Flat;

  @Column({ type: 'int', nullable: true })
  flat_id: number;
}
