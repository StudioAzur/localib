/* eslint-disable prettier/prettier */
import { customerProvider } from './../providers/customer.providers';
import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Customer, CustomerSchema } from 'src/schemas/customer.schema';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Customer.name, schema: CustomerSchema }]),
    DatabaseModule],
  controllers: [CustomerController],
  providers: [CustomerService, ...customerProvider],
})
export class CustomerModule {}
