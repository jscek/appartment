import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { UserModule } from './users/user.module';
import { NotesModule } from './notes/notes.module';
import { FlatModule } from './flat/flat.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    NotesModule,
    UserModule,
    FlatModule,
    ShoppingListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
