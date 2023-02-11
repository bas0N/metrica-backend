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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("../db/repositories/users.repository");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async getMe(email) {
        return this.findUser(email);
    }
    async setCompanyName(email, companyName) {
        return this.usersRepository.setCompanyName(email, companyName);
    }
    async findUser(email) {
        return this.usersRepository.findUser(email);
    }
    async addUser(email, bearerToken) {
        return this.usersRepository.addUser(email, bearerToken);
    }
    async checkIfPaymentNeeded(email, bearerToken) {
        try {
            const user = await this.usersRepository.findUser(email);
            console.log('checkpayment user: ', user);
            if (!user) {
                console.log('user added in checkIfPaymentNeeded');
                this.addUser(email, bearerToken);
                return { paymentNeeded: true, configNeeded: true };
            }
            if (user.companyName.length == 0) {
                if (user.nextPayment < new Date()) {
                    const userFound = await this.usersRepository.setPaymentNeeded(email, true);
                    return { paymentNeeded: true, configNeeded: true };
                }
                if (user.paymentNeeded) {
                    return { paymentNeeded: true, configNeeded: true };
                }
                return { paymentNeeded: false, configNeeded: true };
            }
            else {
                if (user.nextPayment < new Date()) {
                    const userFound = await this.usersRepository.setPaymentNeeded(email, true);
                    return { paymentNeeded: true, configNeeded: false };
                }
                if (user.paymentNeeded) {
                    return { paymentNeeded: true, configNeeded: false };
                }
                return { paymentNeeded: false, configNeeded: false };
            }
        }
        catch (e) {
            console.log(e);
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map