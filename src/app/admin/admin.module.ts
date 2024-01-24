import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ShowAssuranceComponent } from './Page/show-assurance/show-assurance.component';
import { ShowVehiculeComponent } from './Page/show-vehicule/show-vehicule.component';
import { ShowDriverLicenseComponent } from './Page/show-driver-license/show-driver-license.component';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './Component/alert/alert.component';
import { MainTemplateComponent } from './Component/main-template/main-template.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { SideBarComponent } from './Component/side-bar/side-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Page/home/home.component';


@NgModule({
  declarations: [
    ShowAssuranceComponent,
    ShowVehiculeComponent,
    ShowDriverLicenseComponent,
    AlertComponent,
    MainTemplateComponent,
    NavBarComponent,
    SideBarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
