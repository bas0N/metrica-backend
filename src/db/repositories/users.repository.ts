import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import AWS from 'aws-sdk';
import { Model } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { UserDocument, User } from '../schemas/user.schema';
// export class UsersRepository {
//   constructor() {}

//   async createUser(username: string, password: string) {
//     const newUser = {
//       id: uuid(),
//       username,
//       password,
//     };
//     try {
//       console.log(
//         'table name: ',
//         JSON.stringify(process.env.STACK_MET_TABLE_NAME),
//       );
//       await new AWS.DynamoDB.DocumentClient()
//         .put({
//           TableName: `${process.env.STACK_MET_TABLE_NAME}`,
//           Item: newUser,
//         })
//         .promise();
//     } catch (error) {
//       throw new InternalServerErrorException(error);
//     }

//     return { ok: true, data: newUser };
//   }
// }

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }
}
