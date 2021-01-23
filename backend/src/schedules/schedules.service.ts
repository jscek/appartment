import { Injectable, NotFoundException, RouteParamMetadata } from '@nestjs/common';
import { inheritPropertyInitializers } from '@nestjs/mapped-types';
import { InjectRepository } from '@nestjs/typeorm';
import { Flat } from 'src/flats/entities/flat.entity';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { CreateUserTaskDto } from './dto/create-user-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { UpdateUserTaskDto } from './dto/update-user-task.dto';
import { Schedule } from './entities/schedule.entity';
import { Task } from './entities/task.entity';
import { UserTask } from './entities/user-task.entity';

@Injectable()
export class SchedulesService {
  constructor(
    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
    @InjectRepository(UserTask)
    private userTaskRepository: Repository<UserTask>,
  ) {}

  async createSchadule(flat: Flat): Promise<Schedule> {
    const newSchedule = this.scheduleRepository.create({ flat });
    return this.scheduleRepository.save(newSchedule);
  }

  async createTask(scheduleId: number, createTaskDto: CreateTaskDto): Promise<Task> {
    const scheduler = await this.scheduleRepository.findOne(scheduleId);
    if (!scheduler) {
      throw new NotFoundException(`Schedule with id #${scheduleId} not found`);
    }
    const task = this.taskRepository.create({ schedule: scheduler, ...createTaskDto });
    return this.taskRepository.save(task);
  }

  async createUserTask(taskId: number, createUserTaskDto: CreateUserTaskDto): Promise<UserTask> {
    const taskk = await this.taskRepository.findOne(taskId);
    if (!taskk) {
      throw new NotFoundException(`Task with id #${taskId} not found`);
    }
    const userTask = this.userTaskRepository.create({ ...createUserTaskDto });
    return this.userTaskRepository.save(userTask);
  }

  async findAllScheduleTasks(scheduleId: number): Promise<Task[]> {
    const scheduler = await this.scheduleRepository.findOne(scheduleId, { relations: ['tasks'] });
    if (!scheduler) {
      throw new NotFoundException(`Schedule with id #${scheduleId} not found`);
    }
    return scheduler.tasks;
  }

  async findOneTask(taskId: number): Promise<Task> {
    const task = await this.scheduleRepository.findOne(taskId);
    if (!task) {
      throw new NotFoundException(`Task with id #${taskId} not found`);
    }
    return this.taskRepository.findOne(taskId);
  }

  async updateTask(taskId: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    return this.taskRepository.save({ id: taskId, ...updateTaskDto });
  }

  async updateUserTask(
    userTaskId: number,
    updateUserTaskDto: UpdateUserTaskDto,
  ): Promise<UserTask> {
    return this.userTaskRepository.save({ id: userTaskId, ...updateUserTaskDto });
  }

  async removeTask(taskId: number): Promise<void> {
    await this.taskRepository.delete(taskId);
  }

  async removeUserTask(userTaskId: number): Promise<void> {
    await this.userTaskRepository.delete(userTaskId);
  }
}
