import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { FlatsService } from './flats.service';
import { CreateFlatDto } from './dto/create-flat.dto';
import { UpdateFlatDto } from './dto/update-flat.dto';

@Controller('flats')
export class FlatsController {
  constructor(private readonly flatsService: FlatsService) {}

  @Post()
  create(@Body() createFlatDto: CreateFlatDto) {
    return this.flatsService.create(createFlatDto);
  }

  @Get()
  findAll() {
    return this.flatsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flatsService.findOne(+id);
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
