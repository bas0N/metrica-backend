import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { String } from 'aws-sdk/clients/acm';
import { AddSurveyDto } from './dto/AddSurvey.dto';
import { ChangeStateDto } from './dto/ChangeState.dto';
import { SurveyService } from './survey.service';

@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  //@UseGuards(AuthGuard('jwt'))
  @Post('createSurvey')
  createSurvey(
    @Body()
    { email, addSurveyDto }: { email: String; addSurveyDto: AddSurveyDto },
  ) {
    return this.surveyService.createSurvey(email, addSurveyDto);
  }
  //add user verifiaction
  //@UseGuards(AuthGuard('auth0'))
  @Get('getSurveys')
  getSurveys() {
    try {
      return this.surveyService.getSurveys();
    } catch (err) {
      console.log(err);
    }
  }
  //get survey details
  //@UseGuards(AuthGuard('jwt'))
  @Get('/:surveyId')
  getSurveyDetails(@Param('surveyId') id: string) {
    try {
      return this.surveyService.getSurveyDetails(id);
    } catch (err) {
      console.log(err);
    }
  }
  //edit survey
  @UseGuards(AuthGuard('jwt'))
  @Post('editSurvey')
  editSurvey() {
    return this.surveyService.editSurvey();
  }
  //delete survey
  //@UseGuards(AuthGuard('jwt'))
  @Delete('/:surveyId')
  deleteSurvey(@Param('surveyId') id: string) {
    return this.surveyService.deleteSurvey(id);
  }
  //change state
  @UseGuards(AuthGuard('jwt'))
  @Put('changeSurveyState')
  changeSurveystate(@Body() changeStateDto: ChangeStateDto) {
    return this.surveyService.changeSurveystate(changeStateDto);
  }
  //send survey
  @Post('sendSurvey')
  sendSurvey() {
    return this.surveyService.sendSurvey();
  }
}
