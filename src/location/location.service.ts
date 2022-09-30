import { Customer } from 'src/schemas/customer.schema';
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
  async create(createLocationDto: CreateLocationDto): Promise<Location> {
    return this.locationModel.create(createLocationDto);
  }

  findAll() {
    return this.locationModel.find().exec();
  }

  findOne(id: string) {
    return this.locationModel.findById(id).populate(['customer', 'vehicle']);
  }

  update(id: string, updateLocationDto: UpdateLocationDto) {
    return this.locationModel.findByIdAndUpdate(id, updateLocationDto).exec();
  }

  remove(id: string) {
    return this.locationModel.findByIdAndRemove(id);
  }
}
