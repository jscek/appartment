import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
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
  month: number;

  @Column({ nullable: true })
  day: number;

  @Column({ nullable: false })
  done: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // userTask *- task
  @ManyToOne(() => Task, (task) => task.userTasks)
  @JoinColumn({ name: 'task_id' })
  task: Task;

  // userTask *- user
  @ManyToOne(() => User, (user) => user.userTasks)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
