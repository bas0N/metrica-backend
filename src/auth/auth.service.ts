import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import * as AWS from 'aws-sdk';
import { UsersRepository } from '../db/repositories/users.repository';
import { v4 as uuid } from 'uuid';
import { User } from 'src/db/schemas/user.schema';
import { AddUserDto } from 'src/users/dto/AddUser.dto';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private usersRepository: UsersRepository,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findUser(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any): Promise<any> {
    const payload = { email: user.email, id: user.userId };
    return { access_token: this.jwtService.sign(payload) };
  }
  async register({ email, password }: AddUserDto): Promise<User> {
    return await this.usersRepository.createUser({
      email,
      password,
    });
  }
  async dynamoCheck() {}
}
