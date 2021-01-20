import { User } from '../../user/entities/user.entity';
import { NoteBoard } from 'src/note-board/entities/note-board.entity';
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

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'id' })
  user: User;

  @Column({ type: 'int', nullable: true })
  user_Id: number;

  @ManyToOne(() => NoteBoard, (note_board) => note_board.notes)
  @JoinColumn({ name: 'note_board_id' })
  note_board: NoteBoard;
}
