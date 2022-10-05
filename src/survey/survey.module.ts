import { Module } from '@nestjs/common';
import { SurveyService } from './survey.service';
import { SurveyController } from './survey.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Survey, SurveySchema } from 'src/db/schemas/survey.schema';
import { SurveyRepository } from 'src/db/repositories/survey.repository';
import { UsersRepository } from 'src/db/repositories/users.repository';
import { User, UserSchema } from 'src/db/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Survey.name, schema: SurveySchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [SurveyService, SurveyRepository, UsersRepository],
  controllers: [SurveyController],
})
export class SurveyModule {}
