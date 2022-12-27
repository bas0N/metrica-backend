import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddRecruitmentDto } from 'src/recruitment/dto/AddRecruitment.dto';
import {
  Recruitment,
  RecruitmentDocument,
} from '../schemas/recrutiment.schema';
import { User, UserDocument } from '../schemas/user.schema';
import { UsersRepository } from './users.repository';
@Injectable()
export class RecruitmentRepository {
  constructor(
    @InjectModel(Recruitment.name)
    private recruitmentModel: Model<RecruitmentDocument>,
  ) {}
  async findRecruitment(recruitmentId: string): Promise<Recruitment> {
    const recruitment = await this.recruitmentModel.findById(recruitmentId);

    return recruitment;
  }
  async addRecruitment(email: string, addRecruitmentDto: AddRecruitmentDto) {
    const recruitment = {};
    console.log(email);
    const newRecruitment = new this.recruitmentModel({
      creatorEmail: email,
      ...addRecruitmentDto,
    });
    return newRecruitment.save();
  }
  async getAllRecruitments() {
    try {
      const recruitments = await this.recruitmentModel.find();
      return recruitments;
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
  async editRecruitment() {}
  async deleteRecruitment(recruitmentId: string) {
    try {
      const survey = await this.recruitmentModel.findByIdAndDelete(
        recruitmentId,
      );
      if (!survey) {
        throw new BadRequestException();
      }
      return survey;
    } catch (err) {
      throw new InternalServerErrorException('Recruitment does not exist.');
    }
  }
}
