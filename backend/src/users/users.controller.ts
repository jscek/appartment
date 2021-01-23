import { Body, Controller, Get, HttpCode, Param, Patch } from '@nestjs/common';
import { AddScoreUserDto } from './dto/add-score-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(204)
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Patch(':userId/score')
  @HttpCode(204)
  async updateScore(@Param('userId') userId: number, @Body() addScoreUserDto: AddScoreUserDto) {
    const score = addScoreUserDto.score;
    return this.usersService.updateScore(userId, score);
  }

  @Patch(':userId/update')
  @HttpCode(204)
  async updateUserProfile(@Param('userId') userId: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUserProfile(userId, updateUserDto);
  }
}
