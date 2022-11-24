import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Survey, SurveySchema } from 'src/db/schemas/survey.schema';
import { SurveyRepository } from 'src/db/repositories/survey.repository';
import { UsersRepository } from 'src/db/repositories/users.repository';
import { User, UserSchema } from 'src/db/schemas/user.schema';
import {
  Recruitment,
  RecruitmentSchema,
} from 'src/db/schemas/recrutiment.schema';
import { RecruitmentRepository } from 'src/db/repositories/recruitment.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Survey.name, schema: SurveySchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: Recruitment.name, schema: RecruitmentSchema },
    ]),
  ],
  providers: [
    SurveyService,
    SurveyRepository,
    UsersRepository,
    RecruitmentRepository,
  ],
  controllers: [SurveyController],
})
export class SurveyModule {}
