/* eslint-disable prettier/prettier */
import { StateVehicleType } from './../types/TypeStateVehicle';
import { VehicleType } from './../types/TypeVehicle';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VehicleDocument = Vehicle & Document;

@Schema()
export class Vehicle {
  @Prop()
  brand: string;

  @Prop()
  model: string;

  @Prop()
  immatriculation: string;

  @Prop()
  price: string;

  @Prop()
  avalaible: boolean;
  
  @Prop()
  denomination: VehicleType;

  @Prop()
  state: StateVehicleType;


}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);