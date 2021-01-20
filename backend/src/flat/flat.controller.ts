import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { FlatService } from './flat.service';
import { CreateFlatDto } from './dto/create-flat.dto';
import { UpdateFlatDto } from './dto/update-flat.dto';

@Controller('flat')
export class FlatController {
  constructor(private readonly flatService: FlatService) {}

  @Post()
  create(@Body() createFlatDto: CreateFlatDto) {
    return this.flatService.create(createFlatDto);
  }

  @Get()
  findAll() {
    return this.flatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlatDto: UpdateFlatDto) {
    return this.flatService.update(+id, updateFlatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flatService.remove(+id);
  }
}
