import { Transform, Type } from 'class-transformer';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from './user.schema';
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
@Schema()
export class Survey {
  //user relation
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  @Type(() => User)
  createdBy: User;

  //recruitment proces relation

  @Prop()
  email: string;
  @Prop()
  candidateFirstName: string;
  @Prop()
  candidateLastName: string;

  @Prop()
  status: SurveyStatus;

  @Prop()
  terminationDate: Date;
  @Prop({ default: new Date(), required: false })
  creationDate: Date;
}

export const SurveySchema = SchemaFactory.createForClass(Survey);
