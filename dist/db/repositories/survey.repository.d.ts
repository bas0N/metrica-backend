/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { AddSurveyDto } from 'src/survey/dto/AddSurvey.dto';
import { ChangeStateDto } from 'src/survey/dto/ChangeState.dto';
import { FillSurveyDto } from 'src/survey/dto/FillSurvey.dto';
import { RecruitmentDocument } from '../schemas/recrutiment.schema';
import { SurveyDocument } from '../schemas/survey.schema';
import { Survey } from '../schemas/survey.schema';
import { UserDocument } from '../schemas/user.schema';
import { RecruitmentRepository } from './recruitment.repository';
import { UsersRepository } from './users.repository';
export declare class SurveyRepository {
    private surveyModel;
    private userModel;
    private recruitmentModel;
    private userRepository;
    private recruitmentRepository;
    constructor(surveyModel: Model<SurveyDocument>, userModel: Model<UserDocument>, recruitmentModel: Model<RecruitmentDocument>, userRepository: UsersRepository, recruitmentRepository: RecruitmentRepository);
    startSurvey(id: string): Promise<any>;
    fillSurvey(fillSurveyDto: FillSurveyDto, id: string): Promise<Survey & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createSurvey(email: string, addSurveyDto: AddSurveyDto): Promise<any>;
    getSurveyDetails(id: string): Promise<Survey | undefined>;
    getSurveys(email: string): Promise<Survey[] | undefined>;
    getSurveysCount(email: string): Promise<{
        surveyCount: number;
    }>;
    deleteSurvey(id: string): Promise<Survey | undefined>;
    changeSurveystate({ newStatus, id }: ChangeStateDto): Promise<Survey & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
