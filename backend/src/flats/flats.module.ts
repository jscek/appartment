import { Module } from '@nestjs/common';
import { FlatsService } from './flats.service';
import { FlatsController } from './flats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flat } from './entities/flat.entity';
import { UsersModule } from 'src/users/users.module';
import { ShoppingList } from 'src/shopping-list/entities/shopping-list.entity';
import { ShoppingListService } from 'src/shopping-list/shopping-list.service';
import { ShoppingListModule } from 'src/shopping-list/shopping-list.module';
import { NotesModule } from 'src/notes/notes.module';
import { Schedule } from 'src/schedules/entities/schedule.entity';
import { SchedulesModule } from 'src/schedules/schedules.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Flat]),
    UsersModule,
    ShoppingListModule,
    NotesModule,
    SchedulesModule,
  ],
  controllers: [FlatsController],
  providers: [FlatsService],
})
export class FlatsModule {}
