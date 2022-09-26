import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import * as AWS from 'aws-sdk';
import { UsersRepository } from '../repositories/users.repository';
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
  async register(userData: any): Promise<any> {
    await this.usersService.create(userData);
    return await this.usersRepository.createUser('username', userData.password);
  }
  async dynamoCheck() {}
}
