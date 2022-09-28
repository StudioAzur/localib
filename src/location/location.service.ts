/* eslint-disable prettier/prettier */
import { VehicleService } from './../vehicle/vehicle.service';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CustomerService } from 'src/customer/customer.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationService {
  constructor(@Inject('LOCATION_MODEL')
    private locationModel: Model<Location>, 
    private readonly customerService: CustomerService, 
    private readonly vehicleService: VehicleService
  ){}
  create(createLocationDto: CreateLocationDto, idCustomer, idVehicle): Promise<Location> {
    const customer = this.customerService.findOne(idCustomer);
    const vehicle = this.vehicleService.findOne(idVehicle);
    const newLocation = {vehicle: vehicle, customer: customer, duration: 3};
    return this.locationModel.create(newLocation);
  }

  findAll() {
    return this.locationModel.find().exec();
  }

  findOne(id: number) {
    return this.locationModel.findById(id).exec();
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return this.locationModel.findByIdAndUpdate(id, updateLocationDto).exec();
  }

  remove(id: number) {
    return this.locationModel.findByIdAndRemove(id);
  }
}
