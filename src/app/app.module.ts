import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ClientService } from './Service/client/client.service';
import { ClientRegistrationComponent } from './Page/client-registration/client-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NotFoundComponent } from './Page/not-found/not-found.component';
import { HomeComponent } from './Page/home/home.component';
import { UserService } from './Service/user/user.service';
import { AuthService } from './Service/auth/auth.service';
import { EmailService } from './Service/email/email.service';
import { AlertComponent } from './Component/alert/alert.component';
import { LoginComponent } from './Page/login/login.component';
import { EmailVerificationComponent } from './Page/email-verification/email-verification.component';
import { ForgotPasswordComponent } from './Page/forgot-password/forgot-password.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NotAuthorizedComponent } from './Page/not-authorized/not-authorized.component';
import { UnderMaintenanceComponent } from './Page/under-maintenance/under-maintenance.component';

// Function to load translations
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ClientRegistrationComponent,
    NotFoundComponent,
    HomeComponent,
    AlertComponent,
    LoginComponent,
    EmailVerificationComponent,
    ForgotPasswordComponent,
    NotAuthorizedComponent,
    UnderMaintenanceComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    ClientService,
    UserService,
    AuthService,
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
