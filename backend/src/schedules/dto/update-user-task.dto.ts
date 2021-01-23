import { PartialType } from '@nestjs/mapped-types';
import { CreateUserTaskDto } from './create-user-task.dto';

export class UpdateUserTaskDto extends PartialType(CreateUserTaskDto) {}
