import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-show-vehicule',
  templateUrl: './show-vehicule.component.html',
  styleUrl: './show-vehicule.component.css'
})
export class ShowVehiculeComponent implements OnInit{
  constructor(private readonly tite:Title){

  }
  ngOnInit(): void {
    this.tite.setTitle("Liste Of Vehicule Page");
  }

  status:string='Pending';
}
