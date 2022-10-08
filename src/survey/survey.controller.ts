import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { String } from 'aws-sdk/clients/acm';
import { AddSurveyDto } from './dto/AddSurvey.dto';
import { SurveyService } from './survey.service';

@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('createSurvey')
  createSurvey(
    @Body()
    { email, addSurveyDto }: { email: String; addSurveyDto: AddSurveyDto },
  ) {
    return this.surveyService.createSurvey(email, addSurveyDto);
  }
  //add user verifiaction
  @UseGuards(AuthGuard('jwt'))
  @Post('getSurveys')
  getSurveys() {
    return this.surveyService.getSurveys();
  }
}
