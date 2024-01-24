import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssuranceRoutingModule } from './assurance-routing.module';
import { AddAssuranceComponent } from './Page/add-assurance/add-assurance.component';
import { ShowAssuranceComponent } from './Page/show-assurance/show-assurance.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './Component/alert/alert.component';
import { SidebarComponent } from './Component/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AddAssuranceComponent,
    ShowAssuranceComponent,
    AlertComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AssuranceRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AssuranceModule { }
