import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserDocument = User & Document;
export interface SavedUser extends Document {
  email: string;
  password: string;
  createdDate: string;
}
@Schema()
export class User {
  @Prop()
  email: string;
  @Prop({ default: new Date(), required: false })
  createdDate: Date;
  @Prop({ default: true })
  paymentNeeded: boolean;
  @Prop({ default: new Date(0), required: false })
  lastPayment: Date;
  @Prop({ default: new Date(0), required: false })
  nextPayment: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
