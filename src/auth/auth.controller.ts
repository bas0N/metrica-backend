import {
  Controller,
  Post,
  Request,
  UseGuards,
  Get,
  Body,
} from '@nestjs/common';
import { getSystemErrorMap } from 'util';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/Register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseGuards(AuthGuard('local'))
  // @Post('/login')
  // async login(@Body() loginDto: LoginDto) {
  //   console.log('login controller');
  //   return this.authService.login(loginDto);
  // }
  // @UseGuards(AuthGuard('jwt'))
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return 'works';
  // }
  // @Post('/register')
  // async register(@Body() registerDto: RegisterDto) {
  //   console.log('esa');
  //   return this.authService.register(registerDto);
  // }
  // @Get('/dynamo-check')
  // async dynamoCheck() {
  //   // return this.authService.dynamoCheck();
  //   return 'dynamo check';
  // }
}
