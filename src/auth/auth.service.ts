import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import * as AWS from 'aws-sdk';
import { UsersRepository } from '../db/repositories/users.repository';
import { v4 as uuid } from 'uuid';
import { User } from 'src/db/schemas/user.schema';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private usersRepository: UsersRepository,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any): Promise<any> {
    const payload = { username: user.username, id: user.userId };
    return { access_token: this.jwtService.sign(payload) };
  }
  async register({ username, password }): Promise<any> {
    return await this.usersRepository.createUser({
      userId: uuid(),
      username,
      password,
    });
  }
  async dynamoCheck() {}
}
