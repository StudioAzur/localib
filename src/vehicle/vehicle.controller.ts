/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto) {
    try {
      return this.vehicleService.create(createVehicleDto);
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  @Get()
  findAll() {
    try {
      return this.vehicleService.findAll();
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  @Get(':id')
  findOne(@Param('id') id:  string) {
    try {
      return this.vehicleService.findOne(id);
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto) {
    try {
      return this.vehicleService.update(+id, updateVehicleDto);
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.vehicleService.remove(+id);
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
      
    }
  }
}
