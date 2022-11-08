import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SurveyModule } from './survey/survey.module';
import { AuthzModule } from './authz/authz.module';
import { RecruitmentController } from './recruitment/recruitment.controller';
import { RecruitmentService } from './recruitment/recruitment.service';
import { RecruitmentModule } from './recruitment/recruitment.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    MongooseModule.forRoot(`${process.env.MONGO_DB_CONNECTION_STRING}`),
    SurveyModule,
    AuthzModule,
    RecruitmentModule,
  ],
  controllers: [AppController, RecruitmentController],
  providers: [AppService, RecruitmentService],
})
export class AppModule {}
