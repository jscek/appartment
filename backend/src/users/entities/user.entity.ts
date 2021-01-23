import { Flat } from '../../flats/entities/flat.entity';
import { Note } from '../../notes/entities/note.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserTask } from 'src/schedules/entities/user-task.entity';

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

  @Column({ nullable: true })
  score: number;

  // user -* note
  @OneToMany(() => Note, (note) => note.user)
  notes: Note[];

  // user *- flat
  @ManyToOne(() => Flat)
  @JoinColumn({ name: 'flat_id' })
  flat: Flat;

  // user -* userTask
  @OneToMany(() => UserTask, (userTask) => userTask.user)
  userTasks: UserTask[];
}
