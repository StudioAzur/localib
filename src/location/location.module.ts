import { VehicleSchema } from 'src/schemas/vehicle.schema';
import { Vehicle } from './../vehicle/entities/vehicle.entity';
import { vehicleProvider } from './../providers/vehicle.providers';
import { VehicleService } from './../vehicle/vehicle.service';
import { CustomerService } from './../customer/customer.service';
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Location, LocationSchema } from 'src/schemas/location.schema';
import { locationProvider } from 'src/providers/location.providers';
import { DatabaseModule } from 'src/database/database.module';
import { customerProvider } from 'src/providers/customer.providers';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Location.name, schema: LocationSchema }, {name: Vehicle.name, schema: VehicleSchema}],),
    DatabaseModule],
  controllers: [LocationController],
  providers: [LocationService, ...locationProvider, CustomerService, VehicleService, ...customerProvider, ...vehicleProvider],
})
export class LocationModule {}
