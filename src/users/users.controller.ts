import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
@Controller('users')
export class UsersController {
  @Get()
  listUsers() {
    console.log('ok');
    return 'ok';
  }
  @Post()
  createUser(@Body() body: CreateUserDto) {
    console.log(body);
  }

  @Get('/:id')
  getUser(@Param('id') id: string) {
    console.log(id);
  }
}
