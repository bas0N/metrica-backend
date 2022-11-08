import { Controller, Post, Put } from '@nestjs/common';
import { RecruitmentService } from './recruitment.service';

@Controller('recruitment')
export class RecruitmentController {
  constructor(private readonly recruitmentService: RecruitmentService) {}
  @Post('addRecruitment')
  addRecruitmentProcess() {
    return this.recruitmentService.addRecruitmentProcess();
  }
  @Put('editRecruitment')
  editRecruitmentProcess() {
    return this.recruitmentService.editRecruitmentProcess();
  }
}
