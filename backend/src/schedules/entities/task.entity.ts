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

import { Schedule } from './schedule.entity';
import { UserTask } from './user-task.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ nullable: false })
  points: number;

  @ManyToOne(() => Schedule)
  @JoinColumn({ name: 'schedule_id' })
  schedule: Schedule;

  // task *-* userTask
  @ManyToMany(() => UserTask, (userTask) => userTask.tasks)
  @JoinColumn({ name: 'userTask_id' })
  userTasks: UserTask[];
}
