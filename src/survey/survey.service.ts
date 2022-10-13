import { BadRequestException, Injectable } from '@nestjs/common';
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
  async getSurveys() {
    const surveys = await this.surveyRepository.getSurveys();
    if (!surveys) {
      throw new BadRequestException('Incorrect survey id.');
    }
    return surveys;
  }
  async getSurveyDetails(id: string) {
    const survey = await this.surveyRepository.getSurveyDetails(id);
    if (!survey) {
      throw new BadRequestException('Incorrect survey id.');
    }
    return survey;
  }
  async editSurvey() {}
  async deleteSurvey() {}
  async changeSurveystate() {}
}
