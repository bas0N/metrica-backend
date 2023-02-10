import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from '../db/repositories/users.repository';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private usersRepository: UsersRepository,
  ) {}

  // async validateUser(email: string, pass: string): Promise<any> {
  //   const user = await this.usersService.findUser(email);
  //   if (user && bcryptjs.compareSync(pass, user.password)) {
  //     const { password, ...result } = user;
  //     return result;
  //   }
  //   return null;
  // }

  // async login(user: LoginDto): Promise<any> {
  //   const payload = { email: user.email };
  //   console.log('secret', process.env.JWT_SECRET);
  //   const access_token = this.jwtService.sign(payload);
  //   console.log('access token', access_token);
  //   console.log('payload', JSON.stringify(payload));
  //   return { access_token };
  // }
  // async register({ email, password }: AddUserDto): Promise<User> {
  //   const salt = bcryptjs.genSaltSync(10);
  //   const hashedPassword: string = await bcryptjs.hashSync(password, salt);
  //   const user = await this.usersRepository.findUser(email);
  //   console.log('user:', JSON.stringify(user));
  //   if (!user) {
  //     return await this.usersRepository.createUser({
  //       email,
  //       password: hashedPassword,
  //     });
  //   } else {
  //     throw new BadRequestException(
  //       'User with the given email already exists.',
  //     );
  //   }
  // }
}
