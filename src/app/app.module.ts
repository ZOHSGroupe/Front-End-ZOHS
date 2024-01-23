import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ClientService } from './authentication/Service/client/client.service';
import { ClientRegistrationComponent } from './authentication/Page/client-registration/client-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NotFoundComponent } from './Page/not-found/not-found.component';
import { HomeComponent } from './Page/home/home.component';
import { UserService } from './authentication/Service/user/user.service';
import { EmailService } from './Service/email/email.service';
import { AlertComponent } from './Component/alert/alert.component';
import { LoginComponent } from './authentication/Page/login/login.component';
import { EmailVerificationComponent } from './authentication/Page/email-verification/email-verification.component';
import { ForgotPasswordComponent } from './authentication/Page/forgot-password/forgot-password.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NotAuthorizedComponent } from './Page/not-authorized/not-authorized.component';
import { UnderMaintenanceComponent } from './Page/under-maintenance/under-maintenance.component';
import { TokenService } from './Service/token/token.service';
import { JwtModule } from '@auth0/angular-jwt';
import { VehiculeModule } from './vehicule/vehicule.module';
import { DriverLicenseModule } from './driver-license/driver-license.module';
import { AssuranceModule } from './assurance/assurance.module';
import { AuthenticationModule } from './authentication/authentication.module';

// Function to load translations
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
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
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return sessionStorage.getItem('auth_token');
        },
        allowedDomains: ['*'], // specify the domains where the app is allowed to request tokens
      },
    }),
    VehiculeModule,
    DriverLicenseModule,
    AssuranceModule,
    AuthenticationModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
