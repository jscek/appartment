import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFlatDto } from './dto/create-flat.dto';
import { UpdateFlatDto } from './dto/update-flat.dto';
import { Flat } from './entities/flat.entity';


@Injectable()
export class FlatService {
  
  constructor(
    @InjectRepository(Flat)
    private flatsRepository: Repository<Flat>,
  ) {}

  create(createFlatDto: CreateFlatDto) {
    const flat = this.flatsRepository.create(createFlatDto);
    return this.flatsRepository.save(flat);
  }

  findAll() {
    return this.flatsRepository.find();
  }

  findOne(id: number) {
    return this.flatsRepository.findOne(id)
  }

  update(id: number, updateFlatDto: UpdateFlatDto) {
    console.log(updateFlatDto);
    return this.flatsRepository.update(id, updateFlatDto);
  }

  async remove(id: number): Promise<void> {
    console.log("Got flat_Id to delete: ", id)
    await this.flatsRepository.delete(id);
  }
}
