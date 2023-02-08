import {
  Body,
  Controller,
  Get,
  Post,
  Redirect,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { loadStripe } from '@stripe/stripe-js';
import { GetUser } from 'src/auth/get-user.decorator';
import CreateChargeDto from './createcharge.dto';
import { PaymentService } from './payment.service';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require('stripe')(
  'sk_test_51MN42aGl8yFTD812zjpm8QETb3bmAFbINDbXyxkE9N9lxe35CQt0YQFUeCRQpUt6fYHFiw4qOopnfEnYrDjek07w00DKzQtvNL',
);
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  @UseGuards(AuthGuard('auth0payment'))
  async createCharge(
    @GetUser() email,
    @Body() { productId }: { productId: string },
  ) {
    const paymentDetails = await this.paymentService.charge(productId, email);
    return paymentDetails;
  }
  @Get('/get-all-products')
  async getAllProducts() {
    return await this.paymentService.getAllProducts();
  }
  @Get('/serve-event')
  async serveEvent(@Body() body: any) {
    return await this.paymentService.serveEvent(body);
  }
}
