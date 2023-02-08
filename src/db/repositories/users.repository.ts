import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import AWS from 'aws-sdk';
import { Model } from 'mongoose';
import { async, NotFoundError } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { UserDocument, User, SavedUser } from '../schemas/user.schema';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async setCompanyName(email: string, companyName: string) {
    try {
      const user = await this.userModel.findOneAndUpdate(
        { email },
        { companyName },
      );
      return user;
    } catch (e) {
      console.log(e);
    }
  }
  async addUser(email: string): Promise<User> {
    const newUser = new this.userModel({ email });
    return newUser.save();
  }
  async findUser(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email });
    return user;
  }
  async setPaymentNeeded(email: string, paymentNeeded: boolean): Promise<User> {
    try {
      const user = await this.userModel.findOneAndUpdate(
        { email },
        { paymentNeeded },
      );
      return user;
    } catch (e) {
      console.log(e);
    }
  }
  async setPaymentDate(email: string): Promise<User> {
    try {
      const nextPayment = new Date();
      nextPayment.setDate(nextPayment.getDate() + 30);
      console.log(nextPayment);
      const user = await this.userModel.findOneAndUpdate(
        { email },
        { lastPayment: new Date(), nextPayment },
      );
      return user;
    } catch (e) {
      console.log(e);
    }
  }
}
