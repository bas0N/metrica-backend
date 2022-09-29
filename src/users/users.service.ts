import { Injectable } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';
import { UsersRepository } from 'src/db/repositories/users.repository';
import { User } from 'src/db/schemas/user.schema';
import { AddUserDto } from './dto/AddUser.dto';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async findUser(email: string): Promise<User | undefined> {
    return this.usersRepository.findUser(email);
  }
}
