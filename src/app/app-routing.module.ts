import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverLicenceComponent } from './Page/driver-license/driver-license.component';
const routes: Routes = [
  { path: 'driver-licence', component: DriverLicenceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
