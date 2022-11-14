import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { String } from 'aws-sdk/clients/acm';
import { AddSurveyDto } from './dto/AddSurvey.dto';
import { ChangeStateDto } from './dto/ChangeState.dto';
import { SearchSurveysDto } from './dto/SearchSurveys.dto';
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
  @Get('getSurveysPaginated/:num')
  getSurveysPaginated(@Param('num') num: string) {
    if (isNaN(Number(num)) || Number(num) < 1) {
      throw new BadRequestException('The given page is not a number');
    } else {
      const pageNum = Number(num);
      return this.surveyService.getSurveysPaginated(pageNum);
    }
  }
  @Get('getNumberOfSurveyPages')
  getNumberOfSurveyPages() {
    try {
      return this.surveyService.getNumberOfSurveyPages();
    } catch (err) {
      throw new InternalServerErrorException(err);
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
  @Get('searchSurveys')
  searchSurveys(
    @Body()
    {
      email,
      searchSurveysDto,
    }: {
      email: String;
      searchSurveysDto: SearchSurveysDto;
    },
  ) {
    try {
      return this.surveyService.searchSurveys(email, searchSurveysDto);
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
