import {
  Controller,
  Request,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UseGuards,
  HttpCode,
} from '@nestjs/common';
import { FlatsService } from './flats.service';
import { CreateFlatDto } from './dto/create-flat.dto';
import { UpdateFlatDto } from './dto/update-flat.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UsersService } from 'src/users/users.service';

@Controller('flats')
export class FlatsController {
  constructor(
    private readonly usersService: UsersService,
    private readonly flatsService: FlatsService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Request() req, @Body() createFlatDto: CreateFlatDto) {
    return this.flatsService.create(createFlatDto, req.user);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.flatsService.findOne(+id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findUserFlat(@Request() req) {
    return this.flatsService.findByUser(req.user);
  }

  @Get(':flatId/users')
  async findFlatUsers(@Param('flatId') flatId: number) {
    return this.flatsService.findFlatUsers(flatId);
  }

  @Patch(':code/join')
  @UseGuards(JwtAuthGuard)
  async join(@Request() req, @Param('code') code: string) {
    let flat = await this.flatsService.findByCode(code);
    await this.usersService.addToFlat(req.user.id, flat);
    return this.flatsService.findByCode(code);
  }

  @Patch(':id')
  @HttpCode(204)
  async update(@Param('id') id: string, @Body() updateFlatDto: UpdateFlatDto) {
    return this.flatsService.update(+id, updateFlatDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.flatsService.remove(id);
  }
}
