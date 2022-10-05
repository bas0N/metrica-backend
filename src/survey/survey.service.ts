import { Injectable } from '@nestjs/common';
import { SurveyRepository } from 'src/db/repositories/survey.repository';

@Injectable()
export class SurveyService {
  constructor(private surveyRepository: SurveyRepository) {}
  async createSurvey(email: string): Promise<any> {
    const survey = await this.surveyRepository.createSurvey(email);
    return survey;
  }
}
