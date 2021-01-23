// import { Note } from "src/note/entities/note.entity";
import { NoteBoard } from 'src/notes/entities/note-board.entity';
import { ShoppingList } from 'src/shopping-list/entities/shopping-list.entity';
import { User } from 'src/users/entities/user.entity';
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