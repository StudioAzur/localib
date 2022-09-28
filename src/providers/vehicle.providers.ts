/* eslint-disable prettier/prettier */
import { Connection } from 'mongoose';
import { VehicleSchema } from 'src/schemas/vehicle.schema';

export const customerProvider = [
  {
    provide: 'VEHICLE_MODEL',
    useFactory: (connection: Connection) => connection.model('vehicles', VehicleSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];