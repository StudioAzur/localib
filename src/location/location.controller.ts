/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  create(@Body() createLocationDto: CreateLocationDto, idCustomer, idVehicle) {
    try {
      return this.locationService.create(createLocationDto, idCustomer, idVehicle);
      
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  @Get()
  findAll() {
    try {
      return this.locationService.findAll();
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.locationService.findOne(+id);
      
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLocationDto: UpdateLocationDto) {
    try {
      return this.locationService.update(+id, updateLocationDto);
      
    } catch (error) {
      
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.locationService.remove(+id);
      
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }
}
