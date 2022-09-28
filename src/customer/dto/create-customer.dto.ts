/* eslint-disable prettier/prettier */
import { Expose } from "class-transformer";

export class CreateCustomerDto {
    _id: number;
    name : string;
    surname: string;
    birthdate: Date;
    email: string;
    phoneNumber: string;

    @Expose()
        get fullName(): string {
            return `${this.name} ${this.surname}`;
  }
    
}
