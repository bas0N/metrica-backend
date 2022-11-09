import { Injectable } from '@nestjs/common';
import { AddRecruitmentDto } from './dto/AddRecruitment.dto';

@Injectable()
export class RecruitmentService {
  async addRecruitmentProcess(addRecruitmentDto: AddRecruitmentDto) {
    return addRecruitmentDto;
  }
  async editRecruitmentProcess() {
    return { output: 'edit' };
  }
  async deleteRecruitment(recruitmentId: string) {
    return { recruitmentId };
  }
}
