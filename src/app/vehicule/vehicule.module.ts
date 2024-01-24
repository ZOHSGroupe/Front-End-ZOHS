import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculeRoutingModule } from './vehicule-routing.module';
import { AddVehiculeComponent } from './Page/add-vehicule/add-vehicule.component';
import { ShowVehiculeComponent } from './Page/show-vehicule/show-vehicule.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AlertComponent } from './Component/alert/alert.component';
import { SidebarComponent } from './Component/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AddVehiculeComponent,
    ShowVehiculeComponent,
    AlertComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    VehiculeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class VehiculeModule { }


