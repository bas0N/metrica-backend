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

  async addUser(email: string): Promise<User> {
    const newUser = new this.userModel({ email });
    return newUser.save();
  }
  async findUser(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email });

    return user;
  }
}
