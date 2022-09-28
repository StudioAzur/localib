/* eslint-disable prettier/prettier */
import { LocationSchema } from './../schemas/location.schema';
import { Connection } from 'mongoose';

export const locationProvider = [
  {
    provide: 'LOCATION_MODEL',
    useFactory: (connection: Connection) => connection.model('locations', LocationSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];