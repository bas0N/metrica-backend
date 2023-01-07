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
  // public async charge(amount: number, paymentMethodId: string) {
  //   // return this.stripe.paymentIntents.create({
  //   //   amount,
  //   //   customer: process.env.CUSTOMER_ID,
  //   //   payment_method: paymentMethodId,
  //   //   currency: process.env.STRIPE_CURRENCY,
  //   //   confirm: true,
  //   // });
  //   const session = await this.stripe.checkout.sessions.create({
  //     line_items: [
  //       {
  //         price_data: {
  //           currency: 'usd',
  //           product_data: { name: 'T-shirt' },
  //           unit_amount: 2000,
  //         },
  //         quantity: 1,
  //       },
  //     ],
  //     mode: 'payment',
  //     success_url: 'http://localhost:3002/buy/success',
  //     cancel_url: 'http://localhost:3002/buy/failure',
  //   });
  // }
  public async charge() {
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
          price: 'price_1MN494Gl8yFTD812Pxc7q7QP',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3002/buy/success',
      cancel_url: 'http://localhost:3002/buy/failure',
    });
    return session;
  }
}
