/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Schema as MongooseSchema, Types } from 'mongoose';

export type LocationDocument = Location & Document;

@Schema()
export class Location {
  
  _id : mongoose.Types.ObjectId;
  
  @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'Customer' })
  id_customer: Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'Vehicle' })
  id_vehicle: Types.ObjectId;

  @Prop()
  startLocation: Date;

  @Prop()
  endLocation: Date;
}

export const LocationSchema = SchemaFactory.createForClass(Location);