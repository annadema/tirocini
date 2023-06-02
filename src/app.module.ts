import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersDataModule } from './users_data/users_data.module';

@Module({
  imports: [UsersModule, UsersDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
