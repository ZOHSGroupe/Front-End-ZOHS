import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Page/login/login.component';
import { EmailVerificationComponent } from './Page/email-verification/email-verification.component';
import { ClientRegistrationComponent } from './Page/client-registration/client-registration.component';
import { ForgotPasswordComponent } from './Page/forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './Component/alert/alert.component';
import { MainTemplateComponent } from './Component/main-template/main-template.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { SideBarComponent } from './Component/side-bar/side-bar.component';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HomeComponent } from './Page/home/home.component';

// HttpLoaderFactory to load module-specific translation files
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    LoginComponent,
    EmailVerificationComponent,
    ClientRegistrationComponent,
    ForgotPasswordComponent,
    AlertComponent,
    MainTemplateComponent,
    NavBarComponent,
    SideBarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AuthenticationModule { }
