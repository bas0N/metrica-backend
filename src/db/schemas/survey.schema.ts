import { Transform, Type } from 'class-transformer';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from './user.schema';
import { Recruitment } from './recrutiment.schema';
import { FillSurveyDto } from 'src/survey/dto/FillSurvey.dto';
export type SurveyDocument = Survey & Document;
export interface SavedUser extends Document {
  email: string;
  password: string;
  createdDate: string;
}
export enum SurveyStatus {
  FILLED,
  PENDING,
  DRAFT,
}
export enum SurveyType {
  FRONTEND,
  BACKEND,
  UXUI,
  DEVOPS,
}
export enum SeachTextProperty {
  NAME,
  ID,
  EMAIL,
}

@Schema()
export class Survey {
  //user relation
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  @Type(() => User)
  createdBy: User;

  //recruitment proces relation

  @Prop()
  recipientEmail: string;
  @Prop()
  candidateFirstName: string;
  @Prop()
  candidateLastName: string;

  @Prop()
  surveyStatus: SurveyStatus;
  //user relation
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Recruitment.name })
  @Type(() => Recruitment)
  recruitment: Recruitment;

  surveyData: FillSurveyDto;
  @Prop()
  terminationDate: Date;
  @Prop({ default: new Date(), required: false })
  creationDate: Date;
}

export const SurveySchema = SchemaFactory.createForClass(Survey);
