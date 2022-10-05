import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddSurveyDto } from 'src/survey/dto/AddSurvey.dto';
import { SurveyDocument } from '../schemas/survey.schema';
import { Survey } from '../schemas/survey.schema';
@Injectable()
export class SurveyRepository {
  constructor(
    @InjectModel(Survey.name) private surveyModel: Model<SurveyDocument>,
  ) {}

  async createSurvey(survey: AddSurveyDto): Promise<Survey> {
    const newSurvey = new this.surveyModel(survey);
    return newSurvey.save();
  }
}
