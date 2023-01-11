import { Injectable } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';
import { UsersRepository } from 'src/db/repositories/users.repository';
import { User } from 'src/db/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  //find user to get payment data
  async findUser(email: string): Promise<User | undefined> {
    return this.usersRepository.findUser(email);
  }
  //add user if it has not yet been saved
  async addUser(email: string): Promise<User | undefined> {
    return this.usersRepository.addUser(email);
  }
}
