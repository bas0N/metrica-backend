import { Injectable } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';
import { throttleTime } from 'rxjs';
import { UsersRepository } from 'src/db/repositories/users.repository';
import { User } from 'src/db/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async getMe(email: string) {
    return this.findUser(email);
  }
  async setCompanyName(email: string, companyName: string) {
    return this.usersRepository.setCompanyName(email, companyName);
  }
  //find user to get payment data
  async findUser(email: string): Promise<User | undefined> {
    return this.usersRepository.findUser(email);
  }
  //add user if it has not yet been saved
  async addUser(email: string, bearerToken: string): Promise<User | undefined> {
    return this.usersRepository.addUser(email, bearerToken);
  }
  public async checkIfPaymentNeeded(email: string, bearerToken: string) {
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
          //set paymentNeeded to true
          const userFound = await this.usersRepository.setPaymentNeeded(
            email,
            true,
          );
          return { paymentNeeded: true, configNeeded: true };
        }
        if (user.paymentNeeded) {
          return { paymentNeeded: true, configNeeded: true };
        }
        return { paymentNeeded: false, configNeeded: true };
      } else {
        if (user.nextPayment < new Date()) {
          //set paymentNeeded to true
          const userFound = await this.usersRepository.setPaymentNeeded(
            email,
            true,
          );
          return { paymentNeeded: true, configNeeded: false };
        }
        if (user.paymentNeeded) {
          return { paymentNeeded: true, configNeeded: false };
        }
        return { paymentNeeded: false, configNeeded: false };
      }
    } catch (e) {
      console.log(e);
    }
  }
}
