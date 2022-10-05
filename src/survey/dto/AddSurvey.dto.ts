import { IsNotEmpty, IsOptional } from 'class-validator';
import { SurveyStatus } from 'src/db/schemas/survey.schema';
export class AddSurveyDto {
  @IsNotEmpty()
  creatorEmail: string;
  @IsNotEmpty()
  recipentEmail: string;
  @IsNotEmpty()
  candidateFirstName: string;
  @IsNotEmpty()
  candidateLastName: string;
  @IsNotEmpty()
  status: SurveyStatus;
  @IsNotEmpty()
  terminationDate: Date;
}
