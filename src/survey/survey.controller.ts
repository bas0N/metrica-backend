import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { String } from 'aws-sdk/clients/acm';
import { SurveyService } from './survey.service';

@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('createSurvey')
  createSurvey(@Body() { email }: { email: String }) {
    return this.surveyService.createSurvey(email);
  }
}
