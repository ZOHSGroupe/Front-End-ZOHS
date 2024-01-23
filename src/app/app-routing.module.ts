import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientRegistrationComponent } from './Page/client-registration/client-registration.component';
import { HomeComponent } from './Page/home/home.component';
import { NotFoundComponent } from './Page/not-found/not-found.component';
import { LoginComponent } from './Page/login/login.component';
import { ForgotPasswordComponent } from './Page/forgot-password/forgot-password.component';
import { EmailVerificationComponent } from './Page/email-verification/email-verification.component';
import { NotAuthorizedComponent } from './Page/not-authorized/not-authorized.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: '',
  },
  { path: 'client-registration', component: ClientRegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'email-verification', component: EmailVerificationComponent },
  { path: 'not-authorized', component: NotAuthorizedComponent },
  { path: '**', component: NotFoundComponent },



  { path: '**', component: NotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
