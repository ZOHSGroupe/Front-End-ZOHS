import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientRegistrationComponent } from './authentication/Page/client-registration/client-registration.component';
import { HomeComponent } from './Page/home/home.component';
import { NotFoundComponent } from './Page/not-found/not-found.component';
import { LoginComponent } from './authentication/Page/login/login.component';
import { ForgotPasswordComponent } from './authentication/Page/forgot-password/forgot-password.component';
import { EmailVerificationComponent } from './authentication/Page/email-verification/email-verification.component';
import { NotAuthorizedComponent } from './Page/not-authorized/not-authorized.component';
import { UnderMaintenanceComponent } from './Page/under-maintenance/under-maintenance.component';
import { DriverLicenseModule } from './driver-license/driver-license.module';
import { AssuranceModule } from './assurance/assurance.module';
import { VehiculeModule } from './vehicule/vehicule.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AdminModule } from './admin/admin.module';
import { AboutComponent } from './Page/about/about.component';
import { HelpComponent } from './Page/help/help.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: '',
  },
  { path: 'not-authorized', component: NotAuthorizedComponent },
  { path: 'about', component: AboutComponent },
  { path: 'help', component: HelpComponent },
  { path: 'under-maintenance', component: UnderMaintenanceComponent },

  { path: 'driver-license', loadChildren: () => DriverLicenseModule },
  { path: 'assurance', loadChildren: () => AssuranceModule },
  { path: 'vehicule', loadChildren: () => VehiculeModule },
  { path: 'auth' , loadChildren: () => AuthenticationModule },
  { path: 'admin' , loadChildren: () => AdminModule },

  { path: '**', component: NotFoundComponent },



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
