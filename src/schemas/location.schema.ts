/* eslint-disable prettier/prettier */
import { Customer } from 'src/schemas/customer.schema';
import { Vehicle } from './../vehicle/entities/vehicle.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Schema as MongooseSchema } from 'mongoose';

export type LocationDocument = Location & Document;

@Schema()
export class Location {

  _id : mongoose.Types.ObjectId;
  
  @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'customers' })
  customer: Customer;

  @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'vehicles' })
  vehicle: Vehicle;

  @Prop()
  startLocation: Date;

  @Prop()
  endLocation: Date;
}

export const LocationSchema = SchemaFactory.createForClass(Location);