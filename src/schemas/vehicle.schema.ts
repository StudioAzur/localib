/* eslint-disable prettier/prettier */
import { StateVehicleType } from '../types/StateVehicleType';
import { VehicleType } from '../types/VehicleType';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type VehicleDocument = Vehicle & Document;

@Schema()
export class Vehicle {
  _id : mongoose.Types.ObjectId;

  @Prop()
  type_vehicle: VehicleType;

  @Prop()
  brand: string;

  @Prop()
  model: string;

  @Prop()
  state: StateVehicleType;

  @Prop()
  immatriculation: string;

  @Prop()
  price: string;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);