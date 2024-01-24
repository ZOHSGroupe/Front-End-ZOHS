import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculeComponent } from './Page/vehicule/vehicule.component';
import { HomeComponent } from './Page/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/vehicules', pathMatch: 'full' }, // Redirect to /vehicules by default
  { path: 'vehicules', component: VehiculeComponent },
  // Add more routes as needed
  { path: 'Home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
