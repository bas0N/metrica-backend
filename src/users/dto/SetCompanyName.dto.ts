import { IsNotEmpty, IsOptional } from 'class-validator';
export class SetCompanyName {
  @IsNotEmpty()
  companyName;
}
