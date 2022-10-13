import { IsNotEmpty, IsOptional } from 'class-validator';
import { SurveyStatus } from 'src/db/schemas/survey.schema';
export class ChangeStateDto {
  @IsNotEmpty()
  newStatus: SurveyStatus;
  @IsNotEmpty()
  id: string;
}
