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
    create(createCustomerDto: CreateCustomerDto):Promise<Customer>{
      const createdCustomer = new this.customerModel(createCustomerDto);
      return createdCustomer.save();
    }

  findAll():Promise<Customer[]> {
    return this.customerModel.find().exec();
  }

  findOne(id: number) {
    try {
      return this.customerModel.findById(id).exec();
    } catch (error) {
      
    }
    
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.customerModel.findByIdAndUpdate(id, updateCustomerDto).exec();
  }

  remove(id: number) {
    return this.customerModel.findByIdAndRemove(id);
  }
}
