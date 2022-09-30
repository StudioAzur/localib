/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
  _id : mongoose.Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop()
  birthday: Date;

  @Prop()
  email: string;

  @Prop()
  phoneNumber: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);