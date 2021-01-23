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
} from '@nestjs/common';
import { FlatsService } from './flats.service';
import { CreateFlatDto } from './dto/create-flat.dto';
import { UpdateFlatDto } from './dto/update-flat.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('flats')
export class FlatsController {
  constructor(private readonly flatsService: FlatsService) {}

  @Post()
  create(@Body() createFlatDto: CreateFlatDto) {
    return this.flatsService.create(createFlatDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flatsService.findOne(+id);
  }

  @Patch(':code/join')
  @UseGuards(JwtAuthGuard)
  join(@Request() req, @Param('code') code: string) {
    const userId = req.user.id;
    return;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlatDto: UpdateFlatDto) {
    return this.flatsService.update(+id, updateFlatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flatsService.remove(id);
  }
}
