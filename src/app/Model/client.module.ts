export interface Client {
    ID: string;
    FirstName: string;
    LastName: string;
    NationalID: string;
    Email: string;
    BirthDate: string;
    City: string;
    Nationality: string;
    Gender: Gender; 
    CreateDate: string;
    LastModificationDate: string;
    Status: string;
    Address: string;
    Password  : string;
  }
  
  export enum Gender {
    Male = 'M',
    Female = 'F'
  }