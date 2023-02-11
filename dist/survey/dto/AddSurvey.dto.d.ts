import { SurveyStatus } from 'src/db/schemas/survey.schema';
export declare class AddSurveyDto {
    recipientEmail: string;
    candidateFirstName: string;
    candidateLastName: string;
    surveyStatus: SurveyStatus;
    recruitmentId: string;
    terminationDate: Date;
}
