import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchedulesService } from './schedules.service';
import { SchedulesController } from './schedules.controller';
import { Task } from './entities/task.entity';
import { Schedule } from './entities/schedule.entity';
import { UserTask } from './entities/user-task.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  controllers: [SchedulesController],
  providers: [SchedulesService],
  imports: [TypeOrmModule.forFeature([Schedule, Task, UserTask, User])],
  exports: [SchedulesService],
})
export class SchedulesModule {}
