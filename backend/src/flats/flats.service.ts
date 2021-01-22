import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFlatDto } from './dto/create-flat.dto';
import { UpdateFlatDto } from './dto/update-flat.dto';
import { Flat } from './entities/flat.entity';
import { nanoid } from 'nanoid';

@Injectable()
export class FlatsService {
  constructor(
    @InjectRepository(Flat)
    private flatsRepository: Repository<Flat>,
  ) {}

  async create(createFlatDto: CreateFlatDto): Promise<Flat> {
    const flat = this.flatsRepository.create(createFlatDto);
    const code = nanoid(10);

    return this.flatsRepository.save({ code, ...flat });
  }

  findAll() {
    return this.flatsRepository.find();
  }

  findOne(id: number) {
    return this.flatsRepository.findOne(id);
  }

  async findByCode(code: string): Promise<Flat> {
    const flat = await this.flatsRepository.findOne({ code });
    if (!flat) {
      throw new NotFoundException(`Flat with code: ${code} not found`);
    }

    return flat;
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
