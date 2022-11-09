import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { SurveyType } from 'src/db/schemas/recrutiment.schema';
import { AddRecruitmentDto } from './dto/AddRecruitment.dto';
import { RecruitmentService } from './recruitment.service';

@Controller('recruitment')
export class RecruitmentController {
  constructor(private readonly recruitmentService: RecruitmentService) {}
  @Post('addRecruitment')
  addRecruitmentProcess(@Body() addRecruitmentDto: AddRecruitmentDto) {
    console.log(addRecruitmentDto);
    //return SurveyType[addRecruitmentDto.surveyType];
    return this.recruitmentService.addRecruitmentProcess(addRecruitmentDto);
  }
  @Put('editRecruitment')
  editRecruitmentProcess() {
    return this.recruitmentService.editRecruitmentProcess();
  }
  @Delete('deleteRecruitment')
  deleteRecruitment(@Param('recruitmentId') recruitmentId: string) {
    return this.recruitmentService.deleteRecruitment(recruitmentId);
  }
}
