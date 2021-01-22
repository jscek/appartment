import { User } from '../../users/entities/user.entity';
import { NoteBoard } from '../../notes/entities/note-board.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  title: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @ManyToOne(() => NoteBoard, (note_board) => note_board.notes, { nullable: false })
  @JoinColumn({ name: 'note_board_id' })
  note_board: NoteBoard;
  // note *- user
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
