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
import { GetUser } from 'src/auth/get-user.decorator';
import { SurveyType } from 'src/db/schemas/recrutiment.schema';
import { AddRecruitmentDto } from './dto/AddRecruitment.dto';
import { RecruitmentService } from './recruitment.service';

@Controller('recruitment')
export class RecruitmentController {
  constructor(private readonly recruitmentService: RecruitmentService) {}
  @UseGuards(AuthGuard('auth0'))
  @Post('addRecruitment')
  addRecruitmentProcess(
    @GetUser() email,
    @Body() addRecruitmentDto: AddRecruitmentDto,
  ) {
    console.log(addRecruitmentDto);
    //return SurveyType[addRecruitmentDto.surveyType];
    return this.recruitmentService.addRecruitmentProcess(
      email,
      addRecruitmentDto,
    );
  }
  @UseGuards(AuthGuard('auth0'))
  @Get('getAllRecruitments')
  getAllRecruitments(@GetUser() email) {
    return this.recruitmentService.getAllRecruitments(email);
  }
  @Put('editRecruitment')
  editRecruitmentProcess() {
    return this.recruitmentService.editRecruitmentProcess();
  }
  @Delete('deleteRecruitment/:recruitmentId')
  deleteRecruitment(@Param('recruitmentId') recruitmentId: string) {
    return this.recruitmentService.deleteRecruitment(recruitmentId);
  }
}
