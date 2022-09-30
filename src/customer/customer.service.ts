/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Customer } from 'src/schemas/customer.schema';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';



@Injectable()
export class CustomerService {
  constructor(@Inject('CUSTOMER_MODEL')
    private customerModel: Model<Customer>,
  ){}
    async create(createCustomerDto: CreateCustomerDto):Promise<Customer>{
      const createdCustomer = new this.customerModel(createCustomerDto);
      await createdCustomer.save();
      return createdCustomer;
    }

  findAll():Promise<Customer[]> {
    return this.customerModel.find().exec();
  }

  findOne(id: string) : Promise<Customer>{
      return this.customerModel.findById(id).exec();
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return this.customerModel.findByIdAndUpdate(id, updateCustomerDto).exec();
  }

  remove(id: string) {
    return this.customerModel.findByIdAndRemove(id);
  }
}
