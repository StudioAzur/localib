/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
  @Prop()
  _id : string;

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