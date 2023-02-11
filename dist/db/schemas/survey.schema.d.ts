import mongoose, { Document } from 'mongoose';
import { Recruitment } from './recrutiment.schema';
import { FillSurveyDto } from 'src/survey/dto/FillSurvey.dto';
export declare type SurveyDocument = Survey & Document;
export interface SavedUser extends Document {
    email: string;
    password: string;
    createdDate: string;
}
export declare enum SurveyStatus {
    FILLED = 0,
    PENDING = 1,
    DRAFT = 2
}
export declare enum SurveyType {
    FRONTEND = 0,
    BACKEND = 1,
    UXUI = 2,
    DEVOPS = 3
}
export declare enum SeachTextProperty {
    NAME = 0,
    ID = 1,
    EMAIL = 2
}
export declare class Survey {
    creatorEmail: string;
    recipientEmail: string;
    candidateFirstName: string;
    candidateLastName: string;
    surveyStatus: SurveyStatus;
    recruitment: Recruitment;
    surveyData: FillSurveyDto;
    terminationDate: Date;
    creationDate: Date;
}
export declare const SurveySchema: mongoose.Schema<Survey, mongoose.Model<Survey, any, any, any, any>, {}, {}, {}, {}, "type", Survey>;
