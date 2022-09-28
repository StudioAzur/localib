/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { LocationModule } from './location/location.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:example@localhost:27017/localib?authSource=admin'), CustomerModule, LocationModule, VehicleModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
