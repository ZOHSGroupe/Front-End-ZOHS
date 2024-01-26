import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowDriverLicenseComponent } from './Page/show-driver-license/show-driver-license.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './Component/alert/alert.component';
import { MainTemplateComponent } from './Component/main-template/main-template.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ShowAssuranceComponent } from './Page/show-assurance/show-assurance.component';
import { ShowVehiculeComponent } from './Page/show-vehicule/show-vehicule.component';
import { HomeComponent } from './Page/home/home.component';
import { SideBarComponent } from './Component/side-bar/side-bar.component';
import { ProcessClientComponent } from './Page/process-client/process-client.component';
import { ProcessAssuranceComponent } from './Page/process-assurance/process-assurance.component';
import { ProcessVehiculeComponent } from './Page/process-vehicule/process-vehicule.component';

@NgModule({
  declarations: [
    ShowAssuranceComponent,
    ShowVehiculeComponent,
    ShowDriverLicenseComponent,
    AlertComponent,
    MainTemplateComponent,
    NavBarComponent,
    SideBarComponent,
    HomeComponent,
    ProcessClientComponent,
    ProcessAssuranceComponent,
    ProcessVehiculeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    ],

})
export class AdminModule { }
