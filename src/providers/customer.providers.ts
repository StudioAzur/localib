/* eslint-disable prettier/prettier */
import { CustomerSchema } from './../schemas/customer.schema';
import { Connection } from 'mongoose';

export const customerProvider = [
  {
    provide: 'CUSTOMER_MODEL',
    useFactory: (connection: Connection) => connection.model('customers', CustomerSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];