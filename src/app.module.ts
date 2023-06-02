import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersDataModule } from './users_data/users_data.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tirocini',
      entities: [],
      synchronize: true,
    }),
    UsersModule,
    UsersDataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
