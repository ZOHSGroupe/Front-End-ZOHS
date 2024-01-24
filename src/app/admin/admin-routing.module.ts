import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Page/home/home.component';
import { ShowAssuranceComponent } from './Page/show-assurance/show-assurance.component';
import { ShowVehiculeComponent } from './Page/show-vehicule/show-vehicule.component';
import { ShowDriverLicenseComponent } from './Page/show-driver-license/show-driver-license.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: '',
  },
  { path: 'assurance', component: ShowAssuranceComponent },
  { path: 'vehicule', component: ShowVehiculeComponent },
  { path: 'driver-license', component: ShowDriverLicenseComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
