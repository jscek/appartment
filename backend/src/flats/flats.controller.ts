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
  HttpStatus,
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
  async create(@Body() createFlatDto: CreateFlatDto) {
    return this.flatsService.create(createFlatDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.flatsService.findOne(+id);
  }

  @Patch(':code/join')
  @UseGuards(JwtAuthGuard)
  @HttpCode(204)
  async join(@Request() req, @Param('code') code: string) {
    const flat = await this.flatsService.findByCode(code);
    return this.usersService.addToFlat(req.user.id, flat);
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
