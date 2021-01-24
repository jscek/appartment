import { NoteBoard } from '../../notes/entities/note-board.entity';
import { ShoppingList } from '../../shopping-list/entities/shopping-list.entity';
import { User } from '../../users/entities/user.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Schedule } from 'src/schedules/entities/schedule.entity';

@Entity()
export class Flat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, unique: true })
  code: string;

  @OneToMany(() => User, (user) => user.flat)
  users: User[];

  @OneToOne(() => ShoppingList, (shoppingList) => shoppingList.flat)
  @JoinColumn({ name: 'shopping_list_id ' })
  shoppingList: ShoppingList;

  @OneToOne(() => NoteBoard, (noteBoard) => noteBoard.flat)
  @JoinColumn({ name: 'note_baord_id' })
  noteBoard: NoteBoard;

  @OneToOne(() => Schedule, (schedule) => schedule.flat)
  @JoinColumn({ name: 'schedule_id' })
  schedule: Schedule;
}
