import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddRecruitmentDto } from 'src/recruitment/dto/AddRecruitment.dto';
import { EditRecruitmentDto } from 'src/recruitment/dto/EditRecruitment.dto';
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
  async editRecruitmentProcess(editRecruitmentData: EditRecruitmentDto) {
    const {
      recruitmenDbtId,
      recruitmentInternalId,
      recruitmentDescription,
      recruitmentName,
    } = editRecruitmentData;
    try {
      const recruitment = await this.recruitmentModel.findByIdAndUpdate(
        recruitmenDbtId,
        {
          recruitmentId: recruitmentInternalId,
          recruitmentName: recruitmentName,
          recruitmentDescription: recruitmentDescription,
        },
      );
      if (!recruitment) {
        throw new BadRequestException();
      }
      return recruitment;
    } catch (e) {
      throw new InternalServerErrorException(e.message);

      console.log(e);
    }
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
  async getAllRecruitments(email: string) {
    try {
      const recruitments = await this.recruitmentModel.find({
        creatorEmail: email,
      });
      return recruitments;
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
  async editRecruitment() {}
  async deleteRecruitment(recruitmentId: string) {
    try {
      const recruitment = await this.recruitmentModel.findByIdAndDelete(
        recruitmentId,
      );
      if (!recruitment) {
        throw new BadRequestException();
      }
      return recruitment;
    } catch (err) {
      throw new InternalServerErrorException('Recruitment does not exist.');
    }
  }
}
