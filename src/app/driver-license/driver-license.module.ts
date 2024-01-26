import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverLicenseRoutingModule } from './driver-license-routing.module';
import { AddDriverLicenseComponent } from './Page/add-driver-license/add-driver-license.component';
import { ShowDriverLicenseComponent } from './Page/show-driver-license/show-driver-license.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './Component/alert/alert.component';
import { SidebarComponent } from './Component/sidebar/sidebar.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { MainTemplateComponent } from './Component/main-template/main-template.component';
import { MoreInfoAboutDriverLicenseComponent } from './Page/more-info-about-driver-license/more-info-about-driver-license.component';


@NgModule({
  declarations: [
    AddDriverLicenseComponent,
    ShowDriverLicenseComponent,
    AlertComponent,
    SidebarComponent,
    MainTemplateComponent,
    NavBarComponent,
    MoreInfoAboutDriverLicenseComponent
  ],
  imports: [
    CommonModule,
    DriverLicenseRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
      ]

})
export class DriverLicenseModule { }
