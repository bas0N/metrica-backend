import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(`${process.env.STRIPE_API_KEY}`, {
      apiVersion: '2022-11-15',
    });
  }

  public async getAllProducts() {
    const products = await this.stripe.products.list();
    return products;
  }

  public async charge(productId: string) {
    // return this.stripe.paymentIntents.create({
    //   amount,
    //   customer: process.env.CUSTOMER_ID,
    //   payment_method: paymentMethodId,
    //   currency: process.env.STRIPE_CURRENCY,
    //   confirm: true,
    // });
    const session = await this.stripe.checkout.sessions.create({
      line_items: [
        {
          price: productId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: 'http://localhost:3002/buy/success',
      cancel_url: 'http://localhost:3002/buy/failure',
    });
    return session;
  }
}
