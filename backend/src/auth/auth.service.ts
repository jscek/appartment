import { Injectable, Post } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersSerivce: UsersService, private jwtService: JwtService) {}

  async register(createUserDto: CreateUserDto) {
    const password_hash = await bcrypt.hash(createUserDto.password, 10);
    const newUser = await this.usersSerivce.create({ ...createUserDto, password: password_hash });
    const { password, ...result } = newUser;

    return result;
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersSerivce.findByEmail(email);

    if (user && bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
