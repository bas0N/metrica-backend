import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type RecruitmentDocument = Recruitment & Document;

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
