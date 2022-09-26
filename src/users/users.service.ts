import { Injectable } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';
export type User = {
  userId: number;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
  async create(userData: any): Promise<any> {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(userData.password, salt);
    const userId = Date.now();

    this.users.push({
      userId: userId,
      username: userData.username,
      password: hashedPassword,
    });
    return true;
  }
}
