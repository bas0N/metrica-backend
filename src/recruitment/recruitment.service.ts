import { Injectable } from '@nestjs/common';
import { RecruitmentRepository } from 'src/db/repositories/recruitment.repository';
import { AddRecruitmentDto } from './dto/AddRecruitment.dto';
import { EditRecruitmentDto } from './dto/EditRecruitment.dto';

@Injectable()
export class RecruitmentService {
  constructor(private recruitmentRepository: RecruitmentRepository) {}
  async addRecruitmentProcess(
    email: string,
    addRecruitmentDto: AddRecruitmentDto,
  ) {
    return await this.recruitmentRepository.addRecruitment(
      email,
      addRecruitmentDto,
    );
  }
  async editRecruitmentProcess(editRecruitmentData: EditRecruitmentDto) {
    return this.recruitmentRepository.editRecruitmentProcess(
      editRecruitmentData,
    );
  }
  async deleteRecruitment(recruitmentId: string) {
    return this.recruitmentRepository.deleteRecruitment(recruitmentId);
  }
  async getAllRecruitments(email: string) {
    return this.recruitmentRepository.getAllRecruitments(email);
  }
}
