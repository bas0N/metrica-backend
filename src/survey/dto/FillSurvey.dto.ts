import { Type } from 'class-transformer';
import {
  IsOptional,
  MinLength,
  MaxLength,
  IsNotEmpty,
  IsDefined,
  IsNotEmptyObject,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { SurveyStatus } from 'src/db/schemas/survey.schema';
export class TechnologiesSurveyDto {
  @IsNotEmpty()
  languages: string[];
  @IsOptional()
  frontend: string[];
  @IsOptional()
  backend: string[];
  @IsOptional()
  devops: string[];
  @IsOptional()
  databases: string[];
  @IsOptional()
  uxui: string[];
}
export class AboutYouSurveyDto {
  @IsNotEmpty()
  position: string;
  @IsNotEmpty()
  yearsOfExperience: string;
  @IsNotEmpty()
  description: string;
}
export class PersonalLinksSurveyDto {
  @IsNotEmpty()
  @IsDefined()
  githubUrl: string;
  @IsNotEmpty()
  @IsDefined()
  linkedinUrl: string;
  @IsNotEmpty()
  @IsDefined()
  repositoryUrl: string;
}

export class FillSurveyDto {
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => TechnologiesSurveyDto)
  technologiesSurvey: TechnologiesSurveyDto;
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => AboutYouSurveyDto)
  aboutYouSurvey: AboutYouSurveyDto;
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => PersonalLinksSurveyDto)
  personalLinksSurvey: PersonalLinksSurveyDto;
}
