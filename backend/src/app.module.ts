import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigServiceService } from './config-service/config-service.service';
import { ConfigService } from './config/config.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ConfigServiceService, ConfigService],
})
export class AppModule {}
