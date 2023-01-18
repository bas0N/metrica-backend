import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('auth0payment'))
  @Get('/check-if-payment-config-needed')
  async checkIfPaymentNeeded(@GetUser() email) {
    return await this.usersService.checkIfPaymentNeeded(email);
  }
}
