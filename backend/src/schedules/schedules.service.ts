import { Injectable, NotFoundException, RouteParamMetadata } from '@nestjs/common';
import { inheritPropertyInitializers } from '@nestjs/mapped-types';
import { InjectRepository } from '@nestjs/typeorm';
import { Flat } from 'src/flats/entities/flat.entity';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { User } from 'src/users/entities/user.entity';
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
    @InjectRepository(User)
    private userRepository: Repository<User>,
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
    const tasks = await this.taskRepository.findOne(taskId);
    const id = createUserTaskDto.user_id;
    const users = await this.userRepository.findOne(id);
    if (!tasks) {
      throw new NotFoundException(`Task with id #${taskId} not found`);
    }
    const userTask = this.userTaskRepository.create({
      task: tasks,
      user: users,
      ...createUserTaskDto,
    });
    return this.userTaskRepository.save(userTask);
  }

  async findAllScheduleTasks(scheduleId: number): Promise<Task[]> {
    const scheduler = await this.scheduleRepository.findOne(scheduleId, { relations: ['tasks'] });
    if (!scheduler) {
      throw new NotFoundException(`Schedule with id #${scheduleId} not found`);
    }
    return scheduler.tasks;
  }

  async findAllUserTasksOfTask(taskId: number): Promise<UserTask[]> {
    const task = await this.taskRepository.findOne(taskId, { relations: ['userTasks'] });
    return task.userTasks;
  }

  async findAllUserTasksByMonth(month: number): Promise<UserTask[]> {
    const userTasks = await this.userTaskRepository.find({ where: { month: month } });
    return userTasks;
  }

  async findAllUserTasksByMonthOfchedule(scheduleId: number, month: number) {
    const scheduler = await this.scheduleRepository
      .createQueryBuilder('scheduler')
      .where('scheduler.id = :scheduleId', { scheduleId: scheduleId })
      .leftJoinAndSelect('scheduler.tasks', 'task')
      .leftJoinAndSelect('task.userTasks', 'userTask')
      .where('userTask.month = :month and scheduler.id = :scheduleId', {
        month: month,
        scheduleId: scheduleId,
      })
      .getMany();
    console.log('SCHEDULER ', scheduler);
    return scheduler;
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
