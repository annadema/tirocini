import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private repo: Repository<Users>) {
    this.repo = repo;
  }
  create(username: string, password: string) {
    const user = this.repo.create({ username, password });
    return this.repo.save(user);
  }
  async findOne(id: number) {
    const found = await this.repo.findOneBy({ id });
    if (!found) throw new Error('user not found');

    return found;
  }

  listAll() {
    return this.repo.query(`SELECT * FROM USERS`);
  }

  //   find(email: string) {
  //     return this.repo.find({ where: { email } });
  //   }
}
