import { IsOptional } from 'class-validator';
import { SurveyType } from 'src/db/schemas/recrutiment.schema';
export class AddRecruitmentDto {
  @IsOptional()
  recruitmentId: string;
  @IsOptional()
  recruitmentName: string;
  @IsOptional()
  recruitmentDescription: string;
  @IsOptional()
  recruitmentDeadline: Date;
  @IsOptional()
  surveyType: SurveyType;
}
