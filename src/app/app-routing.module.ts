import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Page/home/home.component';
import { LoginComponent } from './Page/login/login.component';
import { ForgotPasswordComponent } from './Page/forgot-password/forgot-password.component';
import { EmailVerificationComponent } from './Page/email-verification/email-verification.component';
import { NotFoundComponent } from './Page/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'email-verification', component: EmailVerificationComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
