import { InternalServerErrorException } from '@nestjs/common';
import AWS from 'aws-sdk';
import { v4 as uuid } from 'uuid';
export class UsersRepository {
  constructor() {}

  async createUser(username: string, password: string) {
    const newUser = {
      id: uuid(),
      username,
      password,
    };
    try {
      console.log('table name: ', JSON.stringify(process.env.USERS_TABLE_NAME));
      await new AWS.DynamoDB.DocumentClient()
        .put({
          TableName: `${process.env.USERS_TABLE_NAME}`,
          Item: newUser,
        })
        .promise();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    return { ok: true, data: newUser };
  }
}
