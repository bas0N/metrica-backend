import { Controller, Post, Request, UseGuards, Get } from '@nestjs/common';
import { getSystemErrorMap } from 'util';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() req) {
    console.log('login controller');
    return this.authService.login(req.user);
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
  @Post('/register')
  async register(@Request() req) {
    console.log('esa');
    return this.authService.register(req.body);
  }
  @Get('/dynamo-check')
  async dynamoCheck() {
    // return this.authService.dynamoCheck();
    return 'dynamo check';
  }
}
