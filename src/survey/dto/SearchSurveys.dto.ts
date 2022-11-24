import { IsNotEmpty, IsOptional } from 'class-validator';
import { SurveyType } from 'src/db/schemas/recrutiment.schema';
import { SurveyStatus } from 'src/db/schemas/survey.schema';
export class SearchSurveysDto {
  @IsOptional()
  searchValue: string;
}
