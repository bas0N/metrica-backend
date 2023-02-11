import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersRepository } from 'src/db/repositories/users.repository';
import { User, UserSchema } from 'src/db/schemas/user.schema';
import { UsersModule } from 'src/users/users.module';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    UsersModule,
  ],
  providers: [PaymentService, UsersRepository],
  controllers: [PaymentController],
})
export class PaymentModule {}
