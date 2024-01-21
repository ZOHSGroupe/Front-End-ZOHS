import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './Service/client.service';
import { ClientRegistrationComponent } from './Page/client-registration/client-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
