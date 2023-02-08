import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { SetCompanyName } from './dto/SetCompanyName.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard('auth0payment'))
  @Get('/check-if-payment-config-needed')
  async checkIfPaymentNeeded(@GetUser() email) {
    return await this.usersService.checkIfPaymentNeeded(email);
  }
  @UseGuards(AuthGuard('auth0'))
  @Post('/set-company-name')
  async setCompanyName(
    @GetUser() email,
    @Body() { companyName }: SetCompanyName,
  ) {
    return await this.usersService.setCompanyName(email, companyName);
  }
}
