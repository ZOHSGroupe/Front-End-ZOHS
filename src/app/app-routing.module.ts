import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculeComponent } from './Page/vehicule/vehicule.component';

const routes: Routes = [
  { path: '', redirectTo: '/vehicules', pathMatch: 'full' }, // Redirect to /vehicules by default
  { path: 'vehicules', component: VehiculeComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
