export enum Gender {
  Male = 'Male',
  Female = 'Female'
}

export interface Address {
  country: string;
  city: string;
  address: string;
}

export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  personalNumber: string;
  mobileNumber: number;
  legalAddress: Address;
  physicalAddress: Address;
  photo?: string;
}
