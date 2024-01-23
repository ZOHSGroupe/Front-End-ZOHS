import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDriverLicenseComponent } from './Page/add-driver-license/add-driver-license.component';
import { ShowDriverLicenseComponent } from './Page/show-driver-license/show-driver-license.component';

const routes: Routes = [
  { path: '', component: ShowDriverLicenseComponent },
  { path: 'add', component: AddDriverLicenseComponent },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverLicenseRoutingModule { }

