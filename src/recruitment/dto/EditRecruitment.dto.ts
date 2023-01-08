import { IsNotEmpty, IsOptional } from 'class-validator';
import { SurveyType } from 'src/db/schemas/recrutiment.schema';
export class EditRecruitmentDto {
  @IsNotEmpty()
  recruitmenDbtId: string;
  @IsNotEmpty()
  recruitmentInternalId: string;
  @IsNotEmpty()
  recruitmentName: string;
  @IsNotEmpty()
  recruitmentDescription: string;
}
