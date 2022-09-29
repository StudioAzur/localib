/* eslint-disable prettier/prettier */
import { StateVehicleType } from "src/types/StateVehicleType";
import { VehicleType } from "src/types/VehicleType";
export class CreateVehicleDto {
    type_vehicle : VehicleType;
    brand: string;
    model: string;
    immatriculation: string;
    state: StateVehicleType ;
    price: number;
}

