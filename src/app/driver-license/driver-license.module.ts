import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverLicenseRoutingModule } from './driver-license-routing.module';
import { AddDriverLicenseComponent } from './Page/add-driver-license/add-driver-license.component';
import { ShowDriverLicenseComponent } from './Page/show-driver-license/show-driver-license.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './Component/alert/alert.component';
import { SidebarComponent } from './Component/sidebar/sidebar.component';
import { MainTemplateComponent } from './Component/main-template/main-template.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AddDriverLicenseComponent,
    ShowDriverLicenseComponent,
    AlertComponent,
    SidebarComponent,
    MainTemplateComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    DriverLicenseRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    
    ],

})
export class DriverLicenseModule { }
