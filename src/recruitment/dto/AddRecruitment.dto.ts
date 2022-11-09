import { IsNotEmpty, IsOptional } from 'class-validator';
import { SurveyType } from 'src/db/schemas/recrutiment.schema';
export class AddRecruitmentDto {
  @IsNotEmpty()
  recruitmentId: string;
  @IsNotEmpty()
  recruitmentName: string;
  @IsNotEmpty()
  recruitmentDescription: string;
  @IsNotEmpty()
  recruitmentDeadline: Date;
  @IsNotEmpty()
  surveyType: SurveyType;
}
