import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehiculeComponent } from './Page/add-vehicule/add-vehicule.component';
import { ShowVehiculeComponent } from './Page/show-vehicule/show-vehicule.component';
import { HomeComponent } from './Page/home/home.component';
import { ProfileComponent } from './Page/profile/profile.component';

const routes: Routes = [
  { path: '', component: ShowVehiculeComponent },
  {
    path: 'show',
    pathMatch: 'full',
    redirectTo: '',
  },
   { path: 'add', component: AddVehiculeComponent },
   { path: 'home', component: HomeComponent },
   { path: 'profile', component: ProfileComponent },
   

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculeRoutingModule { }
