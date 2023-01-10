import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from 'src/users/users.service';
import { UsersRepository } from 'src/db/repositories/users.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/db/schemas/user.schema';
import { jwtConfig } from 'src/config/jwt.config';
import { Auth0Strategy } from './auth0.strategy';
import { SurveyRepository } from 'src/db/repositories/survey.repository';
import { Survey, SurveySchema } from 'src/db/schemas/survey.schema';
import {
  Recruitment,
  RecruitmentSchema,
} from 'src/db/schemas/recrutiment.schema';
import { RecruitmentRepository } from 'src/db/repositories/recruitment.repository';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Survey.name, schema: SurveySchema }]),
    MongooseModule.forFeature([
      { name: Recruitment.name, schema: RecruitmentSchema },
    ]),

    PassportModule.register({ defaultStrategy: 'auth0' }),
    UsersModule,
    JwtModule.registerAsync(jwtConfig),
  ],
  providers: [
    Auth0Strategy,
    JwtStrategy,
    UsersService,
    AuthService,
    UsersRepository,
    RecruitmentRepository,
    SurveyRepository,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
