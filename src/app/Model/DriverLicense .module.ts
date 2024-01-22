export interface DriverLicence {
    id: string;
    type: TypeDriverLicence;
    dateCreation: string; 
    status: Status;
    clientId: string;
    licenseNumber: string;
    issueDate: string; 
    expirationDate: string; 
  }
  
  export enum TypeDriverLicence {
    
  }
  
  export enum Status {
    Active = 'ACTIVE',
    Inactive = 'INACTIVE',
    Expired = 'EXPIRED',
    
  }

 

export interface DriverLicenceDTO {
    id: string;
    type: string; 
    dateCreation: string;
    status: string;
    clientId: string;
    licenseNumber: string;
    issueDate: string;
    expirationDate: string;
   
  }
  
  export interface DriverLicenceCreateDTO {
    type: string;
    dateCreation: string;
    status: string;
    clientId: string;
    licenseNumber: string;
    issueDate: string;
    expirationDate: string;
    
  }
  
  export interface DriverLicenceUpdateDTO {
    type?: string; 
    status?: string;
    issueDate?: string;
    expirationDate?: string;
   
  }
  
  