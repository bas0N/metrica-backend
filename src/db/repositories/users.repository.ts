import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, User } from '../schemas/user.schema';

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
  async addUser(email: string, bearerToken: string): Promise<User | null> {
    // const user = await this.userModel.findOne({ email });
    // console.log(user);
    // if (!user) {
    // const response = await fetch('https://stack-met.eu.auth0.com/userinfo', {
    //   method: 'GET',
    //   headers: {
    //     Authorization: `Bearer ${bearerToken}`,
    //   },
    // });

    // const useros = await response.json();
    const newUser = new this.userModel({
      email,
      // Name: useros.name,
      // avatarUrl: useros.picture,
    });
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
  async setPaymentDate(email: string, chosenPlan: string): Promise<User> {
    try {
      const nextPayment = new Date();
      nextPayment.setDate(nextPayment.getDate() + 30);
      console.log(nextPayment);
      const user = await this.userModel.findOneAndUpdate(
        { email },
        { chosenPlan, lastPayment: new Date(), nextPayment },
      );
      return user;
    } catch (e) {
      console.log(e);
    }
  }
}
