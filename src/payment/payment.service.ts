import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/db/repositories/users.repository';
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
  private stripe: Stripe;

  constructor(private usersRepository: UsersRepository) {
    this.stripe = new Stripe(`${process.env.STRIPE_API_KEY}`, {
      apiVersion: '2022-11-15',
    });
  }

  public async getAllProducts() {
    const products = await this.stripe.products.list();
    return products;
  }

  // public async getAllSubscriptions() {
  //   const subscriptionItems = await this.stripe.subscriptionItems.list({});
  // }
  public async charge(productId: string, customer_email: string) {
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
      customer_email,
      mode: 'payment',
      success_url: 'http://localhost:3002/dashboard',
      cancel_url: 'http://localhost:3002/dashboard',
    });

    //TODO

    await this.usersRepository.setPaymentDate(session.customer_email);
    const user = await this.usersRepository.setPaymentNeeded(
      session.customer_email,
      false,
    );
    console.log(session.customer_email);
    console.log('user after payment: ', user);
    return session;
  }
}
