import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddSurveyDto } from 'src/survey/dto/AddSurvey.dto';
import { SurveyDocument, SurveyStatus } from '../schemas/survey.schema';
import { Survey } from '../schemas/survey.schema';
import { User, UserDocument } from '../schemas/user.schema';
import { UsersRepository } from './users.repository';
@Injectable()
export class SurveyRepository {
  constructor(
    @InjectModel(Survey.name) private surveyModel: Model<SurveyDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private userRepository: UsersRepository,
  ) {}

  async createSurvey(email: string, addSurveyDto: AddSurveyDto): Promise<any> {
    const user = await this.userRepository.findUser(email);
    console.log(SurveyStatus[addSurveyDto.status]);
    const survey = {
      createdBy: user,
      ...addSurveyDto,
      status:
        SurveyStatus[addSurveyDto.status] !== undefined
          ? SurveyStatus[addSurveyDto.status]
          : SurveyStatus['PENDING'],
    };
    console.log(survey);
    const newSurvey = new this.surveyModel(survey);
    return newSurvey.save();
  }
  async getSurveyDetails(id: string): Promise<Survey | undefined> {
    try {
      const survey = await this.surveyModel.findById(id);
      if (!survey) {
        return undefined;
      }
      return survey;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }
  async getSurveys(): Promise<Survey[] | undefined> {
    try {
      const surveys = await this.surveyModel.find();
      if (!surveys) {
        return undefined;
      }
      return surveys;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }

  //   async createSurvey(survey: AddSurveyDto): Promise<Survey> {
  //     const newSurvey = new this.surveyModel(survey);
  //     return newSurvey.save();
  //   }
}
