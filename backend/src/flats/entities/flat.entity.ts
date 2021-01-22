import { NoteBoard } from '../../notes/entities/note-board.entity';
import { ShoppingList } from '../../shopping-list/entities/shopping-list.entity';
import { User } from '../../users/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // flat  -* user
  @OneToMany(() => User, (user) => user.flat)
  users: User[];

  // flat  -* shoppinglist
  @OneToMany(() => ShoppingList, (shoppingList) => shoppingList.flat)
  shoppingList: ShoppingList[];

  @OneToMany(() => NoteBoard, (noteBoard) => noteBoard.flat)
  noteBoard: NoteBoard;
}
