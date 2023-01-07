import {
  Body,
  Controller,
  Get,
  Post,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { loadStripe } from '@stripe/stripe-js';
import CreateChargeDto from './createcharge.dto';
import { PaymentService } from './payment.service';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripe = require('stripe')(
  'sk_test_51MN42aGl8yFTD812zjpm8QETb3bmAFbINDbXyxkE9N9lxe35CQt0YQFUeCRQpUt6fYHFiw4qOopnfEnYrDjek07w00DKzQtvNL',
);
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  async createCharge(@Body() { productId }: { productId: string }) {
    const paymentDetails = await this.paymentService.charge(productId);
    return paymentDetails;
  }
  @Get('/get-all-products')
  async getAllProducts() {
    return await this.paymentService.getAllProducts();
  }
}
