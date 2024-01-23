// vihecule.model.ts

export interface Vehicule {
    id: string;
    marque: string;
    genre?: string; 
    typeVehicule?: string;
    fuelType?: string;
    vehiculeIdentificationNumber?: string;
    cylinderCount?: number;
    taxIdentificationNumber?: string;
    taxHorsepower?: string;
    licensePlateNumber: string;
    emptyWeight: number;
    grossVehiculeWeightRating: number;
    currentCarValue?: number;
    manufacturingDate?: Date;
    status?: string;
    dateCreation?: Date;
    client_id: string;
    numberOfPorts?: number;
  }
  