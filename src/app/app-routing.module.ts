import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverLicenseComponent } from './Page/driver-license/driver-license.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
const routes: Routes = [
  { path: 'driver-licence', component: DriverLicenseComponent },
  { path: 'sidebar', component:  SidebarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
