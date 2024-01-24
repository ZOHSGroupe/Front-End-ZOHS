import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './Page/login/login.component';
import { EmailVerificationComponent } from './Page/email-verification/email-verification.component';
import { ClientRegistrationComponent } from './Page/client-registration/client-registration.component';
import { ForgotPasswordComponent } from './Page/forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './Component/alert/alert.component';


@NgModule({
  declarations: [
    LoginComponent,
    EmailVerificationComponent,
    ClientRegistrationComponent,
    ForgotPasswordComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AuthenticationModule { }
