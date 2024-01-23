import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssuranceRoutingModule } from './assurance-routing.module';
import { AddAssuranceComponent } from './Page/add-assurance/add-assurance.component';
import { ShowAssuranceComponent } from './Page/show-assurance/show-assurance.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AddAssuranceComponent,
    ShowAssuranceComponent
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
