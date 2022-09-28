/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';

export type LocationDocument = Location & Document;

@Schema()
export class Location {
  @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'Customer' })
  idCustomer: Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'Vehicle' })
  idVehicle: Types.ObjectId;

  @Prop()
  startLocation: Date;

  @Prop()
  endLocation: Date;
}

export const LocationSchema = SchemaFactory.createForClass(Location);