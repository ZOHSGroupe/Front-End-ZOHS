import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehiculeComponent } from './Page/add-vehicule/add-vehicule.component';

const routes: Routes = [
   { path: 'add', component: AddVehiculeComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculeRoutingModule { }
