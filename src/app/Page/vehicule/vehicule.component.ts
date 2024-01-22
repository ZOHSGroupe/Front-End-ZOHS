import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { VehiculeService } from '../../Service/vehicule.service';
import { Vehicule } from '../../Model/vehicule.module';
@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrl: './vehicule.component.css'
})



export class VehiculeComponent implements OnInit {
  Vehicules: Vehicule[] = [];

  constructor(private vehiculeService : VehiculeService ) {}

  ngOnInit() {
    this.fetchVihecules();
  }

  fetchVihecules() {
    this. vehiculeService.getVihecules().subscribe((data) => {
      this.Vehicules = data;
    });
  }

  deleteVihecule(viheculeId: string) {
    this. vehiculeService.deleteVihecule(viheculeId).subscribe(() => {
      this.fetchVihecules();
    });
  }

  createVihecule() {
    // Vous pouvez ajuster ces valeurs par défaut selon vos besoins
    const newVihecule: Vehicule  = {
      id: '', // L'id sera généré côté serveur
      marque: 'Nouvelle Marque',
      genre: 'Nouveau Genre',
      typeVehicule: 'Nouveau Type de Véhicule',
      fuelType: 'Nouveau Type de Carburant',
      vehiculeIdentificationNumber: 'Nouveau Numéro d\'Identification du Véhicule',
      cylinderCount: 4, // Par exemple, nombre de cylindres
      taxIdentificationNumber: 'Nouveau Numéro d\'Identification Fiscale',
      taxHorsepower: 'Nouveau Cheval Fiscal',
      licensePlateNumber: 'Nouveau Numéro de Plaque',
      emptyWeight: 1500.0, // Par exemple, poids à vide
      grossVehiculeWeightRating: 2000.0, // Par exemple, poids total autorisé
      currentCarValue: 25000.0, // Par exemple, valeur actuelle du véhicule
      manufacturingDate: new Date(), // Par exemple, date de fabrication
      status: 'Nouveau Statut',
      dateCreation: new Date(), // Par exemple, date de création
      client_id: 'Nouveau ID du Client',
      numberOfPorts: 2, // Par exemple, nombre de ports
    };
  
    this.vehiculeService .createVihecule(newVihecule).subscribe(() => {
      this.fetchVihecules();
    });
  }
  
}

