import { Flat } from 'src/flats/entities/flat.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Task } from './task.entity';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Task, (task) => task.schedule)
  tasks: Task[];

  @OneToOne(() => Flat, (flat) => flat.schedule)
  @JoinColumn({ name: 'flat_id' })
  flat: Flat;
}
