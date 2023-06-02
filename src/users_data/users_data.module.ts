import { Module } from '@nestjs/common';
import { UsersDataService } from './users_data.service';
import { UsersDataController } from './users_data.controller';

@Module({
  providers: [UsersDataService],
  controllers: [UsersDataController]
})
export class UsersDataModule {}
