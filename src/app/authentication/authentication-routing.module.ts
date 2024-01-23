import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientRegistrationComponent } from './Page/client-registration/client-registration.component';
import { LoginComponent } from './Page/login/login.component';
import { ForgotPasswordComponent } from './Page/forgot-password/forgot-password.component';
import { EmailVerificationComponent } from './Page/email-verification/email-verification.component';

const routes: Routes = [
  { path: 'client-registration', component: ClientRegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'email-verification', component: EmailVerificationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
