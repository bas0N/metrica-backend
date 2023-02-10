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
import { GetUser } from 'src/auth/get-user.decorator';

import { AuthGuard } from '@nestjs/passport';
import { String } from 'aws-sdk/clients/acm';
import { AddSurveyDto } from './dto/AddSurvey.dto';
import { ChangeStateDto } from './dto/ChangeState.dto';
import { FillSurveyDto } from './dto/FillSurvey.dto';
import { SearchSurveysDto } from './dto/SearchSurveys.dto';
import { SurveyService } from './survey.service';

@Controller('survey')
export class SurveyController {
  constructor(private readonly surveyService: SurveyService) {}

  //@UseGuards(AuthGuard('jwt'))
  @UseGuards(AuthGuard('auth0'))
  @Post('createSurvey')
  createSurvey(
    @GetUser() email,
    @Body()
    { addSurveyDto }: { addSurveyDto: AddSurveyDto },
  ) {
    return this.surveyService.createSurvey(email, addSurveyDto);
  }
  //add user verifiaction
  @UseGuards(AuthGuard('auth0'))
  @Get('getSurveys')
  getSurveys(@GetUser() email) {
    try {
      return this.surveyService.getSurveys(email);
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
  @UseGuards(AuthGuard('auth0'))
  @Get('getSurveysPaginated/:num')
  getSurveysPaginated(@GetUser() email, @Param('num') num: string) {
    if (isNaN(Number(num)) || Number(num) < 1) {
      throw new BadRequestException('The given page is not a number');
    } else {
      const pageNum = Number(num);
      return this.surveyService.getSurveysPaginated(email, pageNum);
    }
  }
  @UseGuards(AuthGuard('auth0'))
  @Get('getNumberOfSurveyPages')
  getNumberOfSurveyPages(@GetUser() email) {
    try {
      return this.surveyService.getNumberOfSurveyPages(email);
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
      throw new InternalServerErrorException(err);
    }
  }
  @Get('searchSurveys')
  searchSurveys(
    @Body()
    {
      email,
      searchSurveysDto,
    }: {
      email: string;
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
  // @UseGuards(AuthGuard('jwt'))
  // @Post('editSurvey')
  // editSurvey() {
  //   return this.surveyService.editSurvey();
  // }
  //delete survey
  //@UseGuards(AuthGuard('jwt'))
  @Delete('/:surveyId')
  deleteSurvey(@Param('surveyId') id: string) {
    return this.surveyService.deleteSurvey(id);
  }
  //change state
  //@UseGuards(AuthGuard('jwt'))
  @Put('changeSurveyState')
  changeSurveystate(@Body() changeStateDto: ChangeStateDto) {
    return this.surveyService.changeSurveystate(changeStateDto);
  }
  @Put('fillSurvey/:surveyId')
  fillSurvey(
    @Param('surveyId') id: string,
    @Body() fillSurveyDto: FillSurveyDto,
  ) {
    return this.surveyService.fillSurvey(fillSurveyDto, id);
  }
  //send survey
  @Post('sendSurvey')
  sendSurvey() {
    return this.surveyService.sendSurvey();
  }
  //start survey
  @Get('startSurvey/:id')
  startSurvey(@Param('id') id: string) {
    return this.surveyService.startSurvey(id);
  }
}
