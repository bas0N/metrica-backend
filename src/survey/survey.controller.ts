import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
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
  @Get('getSurveys')
  getSurveys() {
    return this.surveyService.getSurveys();
  }
  //get survey details
  @UseGuards(AuthGuard('jwt'))
  @Get('getSurveyDetails')
  getSurveyDetails() {
    return this.surveyService.getSurveyDetails();
  }
  //edit survey
  @UseGuards(AuthGuard('jwt'))
  @Post('editSurvey')
  editSurvey() {
    return this.surveyService.editSurvey();
  }
  //delete survey
  @UseGuards(AuthGuard('jwt'))
  @Delete('deleteSurvey')
  deleteSurvey() {
    return this.surveyService.deleteSurvey();
  }
  //change state
  @UseGuards(AuthGuard('jwt'))
  @Post('changeSurveystate')
  changeSurveystate() {
    return this.surveyService.changeSurveystate();
  }
}
