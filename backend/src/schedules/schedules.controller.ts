import { Controller, Get, Post, Body, Put, Param, Delete, Patch } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateUserTaskDto } from './dto/create-user-task.dto';
import { UserTask } from './entities/user-task.entity';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { UpdateUserTaskDto } from './dto/update-user-task.dto';

@Controller('schedules')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Post(':scheduleId')
  async createTask(@Param('scheduleId') scheduleId: number, @Body() createTaskDto: CreateTaskDto) {
    return this.schedulesService.createTask(scheduleId, createTaskDto);
  }

  @Post('tasks/:taskId')
  async createUserTask(
    @Param('taskId') taskId: number,
    @Body() createUserTaskDto: CreateUserTaskDto,
  ) {
    return this.schedulesService.createUserTask(taskId, createUserTaskDto);
  }

  @Get(':scheduleId/tasks')
  async findAllScheduleTasks(@Param('scheduleId') scheduleId: number) {
    return this.schedulesService.findAllScheduleTasks(scheduleId);
  }

  // sometimes not working xd
  @Get('tasks/:taskId')
  async findOneTask(@Param('taskId') taskId: number) {
    return this.schedulesService.findOneTask(taskId);
  }

  @Get(':scheduleId/tasks/:month')
  async findAllUserTasksByMonthOfchedule(
    @Param('scheduleId') scheduleId: number,
    @Param('month') month: number,
  ) {
    return this.schedulesService.findAllUserTasksByMonthOfchedule(scheduleId, month);
  }

  @Patch('tasks/:taskId')
  async updateTask(@Param('taskId') taskId: number, @Body() updateTaskDto: UpdateTaskDto) {
    return this.schedulesService.updateTask(taskId, updateTaskDto);
  }

  @Patch('tasks/usertask/:userTaskId')
  async updateUserTask(
    @Param('userTaskId') userTaskId: number,
    @Body() updateUserTaskDto: UpdateUserTaskDto,
  ) {
    return this.schedulesService.updateUserTask(userTaskId, updateUserTaskDto);
  }

  @Delete(':taskId')
  async removeTask(@Param('taskId') taskId: number) {
    return this.schedulesService.removeTask(taskId);
  }

  @Delete('tasks/:userTaskId')
  async removeUserTask(@Param('userTaskId') userTaskId: number) {
    return this.schedulesService.removeUserTask(userTaskId);
  }
}
