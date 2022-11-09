import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum SurveyType {
  FRONTEND,
  BACKEND,
  UXUI,
  DEVOPS,
}
@Schema()
export class Recruitment {
  @Prop()
  recruitmentId: string;
  @Prop()
  recruitmentName: string;
  @Prop()
  recruitmentDescription: string;
  @Prop()
  recruitmentDeadline: Date;
  @Prop()
  surveyType: SurveyType;
}
export const RecruitmentSchema = SchemaFactory.createForClass(Recruitment);
