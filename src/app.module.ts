import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SurveyModule } from './survey/survey.module';
import { AuthzModule } from './authz/authz.module';

import { RecruitmentModule } from './recruitment/recruitment.module';

import { PaymentModule } from './payment/payment.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RecruitmentModule,

    UsersModule,
    AuthModule,
    MongooseModule.forRoot(`${process.env.MONGO_DB_CONNECTION_STRING}`),
    SurveyModule,
    AuthzModule,
    PaymentModule,
  ],
  //only AppController and AppService can be here
  //causes errors!!
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
