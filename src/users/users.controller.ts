import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  listUsers() {
    return this.userService.listAll();
  }
  @Post()
  createUser(@Body() body: CreateUserDto) {
    this.userService.create(body.username, body.password);
  }

  @Get('/:id')
  getUser(@Param('id') id: string) {
    return this.userService.findOne(parseInt(id));
  }
}
