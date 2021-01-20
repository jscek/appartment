import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor (
    @InjectRepository(User) 
    private usersRepository: Repository<User>,
  ){}

  create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOne(id)
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: number): Promise<void> {
    console.log("Got user_Id to delete: ", id)
    await this.usersRepository.delete(id);
  }
}
