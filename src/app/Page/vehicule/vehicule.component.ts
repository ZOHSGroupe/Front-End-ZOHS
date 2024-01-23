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
   
  }

  deleteVihecule(viheculeId: string) {
    
  }

  createVihecule() {
    
    };
  
    
 
  
}

