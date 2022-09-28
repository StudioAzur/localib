/* eslint-disable prettier/prettier */
import { Vehicle, VehicleSchema } from './../schemas/vehicle.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { vehicleProvider } from 'src/providers/vehicle.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vehicle.name, schema: VehicleSchema }]),
    DatabaseModule],
  controllers: [VehicleController],
  providers: [VehicleService, ...vehicleProvider],
})
export class VehicleModule {}
