import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Flat } from 'src/flats/entities/flat.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const email = createUserDto.email;
    if (await this.findByEmail(createUserDto.email)) {
      throw new ConflictException(`User with email: ${email} already exists`);
    }

    const user = await this.usersRepository.create(createUserDto);
    user.score = 0;
    return this.usersRepository.save(user);
  }

  async findOne(id: number): Promise<User> {
    const user = this.usersRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with id: ${id} not found`);
    }

    return this.usersRepository.findOne(id);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findOne({ email });
    return user;
  }

  async addToFlat(id: number, flat: Flat): Promise<void> {
    const user = await this.findOne(id);
    await this.usersRepository.save({ ...user, flat });
    return;
  }

  async findFlat(id: number): Promise<Flat> {
    const user = await this.usersRepository.findOne(id, { relations: ['flat'] });
    return user.flat;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  async updateScore(userId: number, score: number) {
    const user = await this.findOne(userId);
    const userCurrentScore = user.score;
    return this.usersRepository.update(userId, { score: score + userCurrentScore });
  }

  async updateUserProfile(userId: number, updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersRepository.save({ id: userId, ...updateUserDto });
  }

  async remove(id: number): Promise<void> {
    console.log('Got user_id to delete: ', id);
    await this.usersRepository.delete(id);
  }
}
