import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import * as AWS from 'aws-sdk';
import { UsersRepository } from '../db/repositories/users.repository';
import { v4 as uuid } from 'uuid';
import { User } from 'src/db/schemas/user.schema';
import { AddUserDto } from 'src/users/dto/AddUser.dto';
import { LoginDto } from './dto/login.dto';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private usersRepository: UsersRepository,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findUser(email);
    if (user && bcryptjs.compareSync(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: LoginDto): Promise<any> {
    const payload = { email: user.email };
    console.log('secret', process.env.JWT_SECRET);
    const access_token = this.jwtService.sign(payload);
    console.log('access token', access_token);
    console.log('payload', JSON.stringify(payload));
    return { access_token };
  }
  async register({ email, password }: AddUserDto): Promise<User> {
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword: string = await bcryptjs.hashSync(password, salt);
    return await this.usersRepository.createUser({
      email,
      password: hashedPassword,
    });
  }
  async dynamoCheck() {}
}
