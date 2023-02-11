import { SurveyType } from 'src/db/schemas/recrutiment.schema';
export declare class AddRecruitmentDto {
    recruitmentId: string;
    recruitmentName: string;
    recruitmentDescription: string;
    recruitmentDeadline: Date;
    surveyType: SurveyType;
}
