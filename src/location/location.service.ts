/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationService {
  constructor(@Inject('LOCATION_MODEL')
    private locationModel: Model<Location>,
  ){}
  create(createLocationDto: CreateLocationDto): Promise<Location> {
    const createdLocation = new this.locationModel(createLocationDto);
      return createdLocation.save();
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
