import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { NoteModule } from './note/note.module';
import { UserModule } from './user/user.module';
import { NoteBoardModule } from './note-board/note-board.module';
import { FlatModule } from './flat/flat.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { ShoppingListCategoryModule } from './shopping-list-category/shopping-list-category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    NoteModule,
    NoteBoardModule,
    UserModule,
    FlatModule,
    ShoppingListModule,
    ShoppingListCategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
