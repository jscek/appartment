import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Task } from './task.entity';

@Entity()
export class UserTask {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  week: number;

  @Column({ nullable: false })
  done: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // userTask *-* task
  @ManyToMany(() => Task, (task) => task.userTasks)
  @JoinColumn({ name: 'task_id' })
  tasks: Task[];

  // userTask *- user
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
