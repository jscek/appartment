import { Module } from '@nestjs/common';
import { FlatsService } from './flats.service';
import { FlatsController } from './flats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flat } from './entities/flat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Flat])],
  controllers: [FlatsController],
  providers: [FlatsService],
})
export class FlatsModule {}
