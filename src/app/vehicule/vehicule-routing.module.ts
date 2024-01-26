import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehiculeComponent } from './Page/add-vehicule/add-vehicule.component';
import { ShowVehiculeComponent } from './Page/show-vehicule/show-vehicule.component';
const routes: Routes = [
   { path: 'add', component: AddVehiculeComponent },
   { path: '', component: ShowVehiculeComponent },

   {
    path: 'show',
    pathMatch: 'full',
    redirectTo: '',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculeRoutingModule { }
