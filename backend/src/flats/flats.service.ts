import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import { CreateFlatDto } from './dto/create-flat.dto';
import { UpdateFlatDto } from './dto/update-flat.dto';
import { Flat } from './entities/flat.entity';
import { nanoid } from 'nanoid';
import { UsersService } from 'src/users/users.service';
import { User } from '../users/entities/user.entity';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { NotesService } from 'src/notes/notes.service';
import { SchedulesService } from 'src/schedules/schedules.service';

@Injectable()
export class FlatsService {
  constructor(
    @InjectRepository(Flat)
    private flatsRepository: Repository<Flat>,
    private readonly shoppingListService: ShoppingListService,
    private readonly noteService: NotesService,
    private readonly scheduleService: SchedulesService,
    private readonly usersService: UsersService,
  ) {}

  async create(createFlatDto: CreateFlatDto, user: User): Promise<Flat> {
    const flat = this.flatsRepository.create(createFlatDto);
    const code = nanoid(10);

    //need to be refactored
    const newFlat = await this.flatsRepository.save({ code, ...flat });
    const schedule = await this.scheduleService.createSchadule(newFlat);
    const shoppingList = await this.shoppingListService.createList(newFlat);
    const noteBoard = await this.noteService.createBoard(newFlat);
    await this.flatsRepository.update(newFlat.id, { shoppingList, noteBoard, schedule });
    await this.usersService.addToFlat(user.id, newFlat);
    return newFlat;
  }

  findOne(id: number) {
    return this.flatsRepository.findOne(id);
  }

  async findFlatUsers(flatId: number): Promise<User[]> {
    const flat = await this.flatsRepository.findOne(flatId, { relations: ['users'] });
    if (!flat) {
      throw new NotFoundException(`flat #${flatId} not found`);
    }
    return flat.users;
  }

  async findByCode(code: string): Promise<Flat> {
    const flat = await this.flatsRepository.findOne({ code }, { relations: ['users'] });
    if (!flat) {
      throw new NotFoundException(`Flat with code: ${code} not found`);
    }

    return flat;
  }

  async findByUser(user: User): Promise<Flat> {
    const flat = await this.usersService.findFlat(user.id);
    return this.flatsRepository.findOne(flat.id, { relations: ['users'] });
  }

  async addUser(userId: number, code: string) {
    const flat = this.findByCode(code);
  }

  update(id: number, updateFlatDto: UpdateFlatDto) {
    console.log(updateFlatDto);
    return this.flatsRepository.update(id, updateFlatDto);
  }

  async remove(id: string): Promise<void> {
    console.log('Got flat_id to delete: ', id);
    await this.flatsRepository.delete(id);
  }
}
