import { Injectable } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';
import { throttleTime } from 'rxjs';
import { UsersRepository } from 'src/db/repositories/users.repository';
import { User } from 'src/db/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  //find user to get payment data
  async findUser(email: string): Promise<User | undefined> {
    return this.usersRepository.findUser(email);
  }
  //add user if it has not yet been saved
  async addUser(email: string): Promise<User | undefined> {
    return this.usersRepository.addUser(email);
  }
  public async checkIfPaymentNeeded(email: string) {
    const user = await this.usersRepository.findUser(email);
    if (user.nextPayment < new Date()) {
      //set paymentNeeded to true
      const userFound = await this.usersRepository.setPaymentNeeded(
        email,
        true,
      );
      return { paymentNeeded: true };
    }
    if (user.paymentNeeded) {
      return { paymentNeeded: true };
    }
    return { paymentNeeded: false };
  }
}
