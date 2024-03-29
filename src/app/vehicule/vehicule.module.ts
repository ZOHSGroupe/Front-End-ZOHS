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
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { MainTemplateComponent } from './Component/main-template/main-template.component';
import { ProfileComponent } from './Page/profile/profile.component';
import { HomeComponent } from './Page/home/home.component';
import { MoreInfoAboutVehiculeComponent } from './Page/more-info-about-vehicule/more-info-about-vehicule.component';


@NgModule({
  declarations: [
    AddVehiculeComponent,
    ShowVehiculeComponent,
    AlertComponent,
    SidebarComponent,
    NavBarComponent,
    AlertComponent,
    MainTemplateComponent,
    ProfileComponent,
    HomeComponent,
    MoreInfoAboutVehiculeComponent
  ],
  imports: [
    CommonModule,
    VehiculeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class VehiculeModule { 
  
}


