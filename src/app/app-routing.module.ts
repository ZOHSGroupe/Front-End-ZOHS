import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverLicenseComponent } from './Page/driver-license/driver-license.component';
const routes: Routes = [
  { path: 'driver-licence', component: DriverLicenseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
