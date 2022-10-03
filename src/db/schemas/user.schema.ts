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
  @Prop()
  password: string;
  @Prop({ default: new Date(), required: false })
  createdDate: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
