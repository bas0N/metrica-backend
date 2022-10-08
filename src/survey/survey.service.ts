import { Injectable } from '@nestjs/common';
import { SurveyRepository } from 'src/db/repositories/survey.repository';
import { AddSurveyDto } from './dto/AddSurvey.dto';

@Injectable()
export class SurveyService {
  constructor(private surveyRepository: SurveyRepository) {}
  async createSurvey(email: string, addSurveyDto: AddSurveyDto): Promise<any> {
    console.log('createSurveyService:');
    console.log(addSurveyDto);
    const survey = await this.surveyRepository.createSurvey(
      email,
      addSurveyDto,
    );
    return survey;
  }
  async getSurveys() {}
}
