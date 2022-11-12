import { IsNotEmpty, IsOptional } from 'class-validator';
import { SurveyStatus, SurveyType } from 'src/db/schemas/survey.schema';
export class AddSurveyDto {
  @IsNotEmpty()
  recipientEmail: string;
  @IsNotEmpty()
  candidateFirstName: string;
  @IsNotEmpty()
  candidateLastName: string;
  @IsNotEmpty()
  surveyStatus: SurveyStatus;
  @IsNotEmpty()
  recruitmentId: string;
  @IsNotEmpty()
  terminationDate: Date;
}
