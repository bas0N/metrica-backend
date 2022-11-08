import { Injectable } from '@nestjs/common';

@Injectable()
export class RecruitmentService {
  async addRecruitmentProcess() {
    return { bason: 'lolo' };
  }
  async editRecruitmentProcess() {
    return { output: 'edit' };
  }
}
