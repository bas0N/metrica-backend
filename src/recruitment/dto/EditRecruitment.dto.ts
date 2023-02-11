import { IsNotEmpty } from 'class-validator';
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
