import mongoose, { Document } from 'mongoose';
export declare type RecruitmentDocument = Recruitment & Document;
export declare enum SurveyType {
    FRONTEND = 0,
    BACKEND = 1,
    UXUI = 2,
    DEVOPS = 3
}
export declare class Recruitment {
    creatorEmail: string;
    recruitmentId: string;
    recruitmentName: string;
    recruitmentDescription: string;
    recruitmentDeadline: Date;
    surveyType: SurveyType;
}
export declare const RecruitmentSchema: mongoose.Schema<Recruitment, mongoose.Model<Recruitment, any, any, any, any>, {}, {}, {}, {}, "type", Recruitment>;
