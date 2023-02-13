"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("../db/repositories/users.repository");
const stripe_1 = __importDefault(require("stripe"));
let PaymentService = class PaymentService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
        this.stripe = new stripe_1.default(`${process.env.STRIPE_API_KEY}`, {
            apiVersion: '2022-11-15',
        });
    }
    async serveEvent(body) {
        console.log(body);
        return;
    }
    async getAllProducts() {
        const products = await this.stripe.products.list();
        return products;
    }
    async charge(productId, customer_email) {
        const session = await this.stripe.checkout.sessions.create({
            line_items: [
                {
                    price: productId,
                    quantity: 1,
                },
            ],
            customer_email,
            mode: 'payment',
            success_url: process.env.FRONTEND_URL,
            cancel_url: process.env.FRONTEND_URL,
        });
        await this.usersRepository.setPaymentDate(session.customer_email, 'Starter');
        const user = await this.usersRepository.setPaymentNeeded(session.customer_email, false);
        console.log(session.customer_email);
        console.log('user after payment: ', user);
        return session;
    }
};
PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map