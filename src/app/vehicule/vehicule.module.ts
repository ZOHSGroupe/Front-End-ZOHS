import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculeRoutingModule } from './vehicule-routing.module';
import { AddVehiculeComponent } from './Page/add-vehicule/add-vehicule.component';
import { ShowVehiculeComponent } from './Page/show-vehicule/show-vehicule.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AddVehiculeComponent,
    ShowVehiculeComponent
  ],
  imports: [
    CommonModule,
    VehiculeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule
  ]
})
export class VehiculeModule { }


