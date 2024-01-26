import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssuranceRoutingModule } from './assurance-routing.module';
import { AddAssuranceComponent } from './Page/add-assurance/add-assurance.component';
import { ShowAssuranceComponent } from './Page/show-assurance/show-assurance.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './Component/alert/alert.component';
import { SidebarComponent } from './Component/sidebar/sidebar.component';
import { MainTemplateComponent } from './Component/main-template/main-template.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { MoreInfoAboutAssuranceComponent } from './Page/more-info-about-assurance/more-info-about-assurance.component';


@NgModule({
  declarations: [
    AddAssuranceComponent,
    ShowAssuranceComponent,
    AlertComponent,
    SidebarComponent,
    MainTemplateComponent,
    NavBarComponent,
    MoreInfoAboutAssuranceComponent
  ],
  imports: [
    CommonModule,
    AssuranceRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ]
})
export class AssuranceModule { }
