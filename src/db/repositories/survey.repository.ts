import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import paginate from 'mongoose-paginate-v2';

import { AddSurveyDto } from 'src/survey/dto/AddSurvey.dto';
import { ChangeStateDto } from 'src/survey/dto/ChangeState.dto';
import { FillSurveyDto } from 'src/survey/dto/FillSurvey.dto';
import {
  Recruitment,
  RecruitmentDocument,
} from '../schemas/recrutiment.schema';
import {
  SurveyDocument,
  SurveySchema,
  SurveyStatus,
  SurveyType,
} from '../schemas/survey.schema';
import { Survey } from '../schemas/survey.schema';
import { User, UserDocument } from '../schemas/user.schema';
import { RecruitmentRepository } from './recruitment.repository';
import { UsersRepository } from './users.repository';
@Injectable()
export class SurveyRepository {
  constructor(
    @InjectModel(Survey.name) private surveyModel: Model<SurveyDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Recruitment.name)
    private recruitmentModel: Model<RecruitmentDocument>,
    private userRepository: UsersRepository,
    private recruitmentRepository: RecruitmentRepository,
  ) {}
  async startSurvey(id: string) {
    try {
      const survey = await this.surveyModel.findById(id);
      if (!survey) {
        return undefined;
      }
    } catch (err) {
      console.log(err);
    }
  }
  async fillSurvey(fillSurveyDto: FillSurveyDto, id: string) {
    try {
      const survey = await this.surveyModel.findByIdAndUpdate(id, {
        surveyData: fillSurveyDto,
      });
      if (!survey) {
        return undefined;
      }
      return survey;
    } catch (err) {
      console.log(err);
    }
  }

  async createSurvey(email: string, addSurveyDto: AddSurveyDto): Promise<any> {
    const recruitment = await this.recruitmentRepository.findRecruitment(
      addSurveyDto.recruitmentId,
    );
    // console.log('in repo', email);
    const survey = {
      creatorEmail: email,
      ...addSurveyDto,
      surveyStatus:
        SurveyStatus[addSurveyDto.surveyStatus] !== undefined
          ? SurveyStatus[addSurveyDto.surveyStatus]
          : SurveyStatus['PENDING'],
      recruitment,
    };
    const newSurvey = new this.surveyModel(survey);
    return newSurvey.save();
  }
  async getSurveyDetails(id: string): Promise<Survey | undefined> {
    try {
      const survey = await (
        await this.surveyModel.findById(id)
      ).populate('recruitment');
      if (!survey) {
        return undefined;
      }
      return survey;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }
  async getSurveys(email: string): Promise<Survey[] | undefined> {
    try {
      const surveys = await this.surveyModel
        .find({ creatorEmail: email })
        .populate('recruitment');
      if (!surveys) {
        return undefined;
      }
      return surveys;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }

  async getSurveysCount(email: string) {
    try {
      return {
        surveyCount: await this.surveyModel.count({ creatorEmail: email }),
      };
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
  async deleteSurvey(id: string): Promise<Survey | undefined> {
    try {
      const survey = await this.surveyModel.findByIdAndDelete(id);
      if (!survey) {
        return undefined;
      }
      console.log(survey);
      return survey;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }

  async changeSurveystate({ newStatus, id }: ChangeStateDto) {
    try {
      const survey = await this.surveyModel.findByIdAndUpdate(id, {
        surveyStatus: SurveyStatus[newStatus],
      });
      if (!survey) {
        return undefined;
      }
      return survey;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }
}
