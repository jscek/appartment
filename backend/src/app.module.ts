import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { NoteModule } from './note/note.module';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()), NoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
