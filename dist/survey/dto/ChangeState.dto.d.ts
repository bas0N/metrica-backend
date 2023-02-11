import { SurveyStatus } from 'src/db/schemas/survey.schema';
export declare class ChangeStateDto {
    newStatus: SurveyStatus;
    id: string;
}
