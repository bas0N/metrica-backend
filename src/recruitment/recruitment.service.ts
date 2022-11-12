import { Injectable } from '@nestjs/common';
import { RecruitmentRepository } from 'src/db/repositories/recruitment.repository';
import { AddRecruitmentDto } from './dto/AddRecruitment.dto';

@Injectable()
export class RecruitmentService {
  constructor(private recruitmentRepository: RecruitmentRepository) {}
  async addRecruitmentProcess(addRecruitmentDto: AddRecruitmentDto) {
    return await this.recruitmentRepository.addRecruitment(addRecruitmentDto);
  }
  async editRecruitmentProcess() {
    return { output: 'edit' };
  }
  async deleteRecruitment(recruitmentId: string) {
    return this.recruitmentRepository.deleteRecruitment(recruitmentId);
  }
  async getAllRecruitments() {
    return this.recruitmentRepository.getAllRecruitments();
  }
}
