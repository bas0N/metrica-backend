import { UsersRepository } from 'src/db/repositories/users.repository';
import Stripe from 'stripe';
export declare class PaymentService {
    private usersRepository;
    private stripe;
    constructor(usersRepository: UsersRepository);
    serveEvent(body: any): Promise<void>;
    getAllProducts(): Promise<Stripe.Response<Stripe.ApiList<Stripe.Product>>>;
    charge(productId: string, customer_email: string): Promise<Stripe.Response<Stripe.Checkout.Session>>;
}
