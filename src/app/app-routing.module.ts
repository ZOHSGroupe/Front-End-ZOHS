import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientRegistrationComponent } from './Page/client-registration/client-registration.component';
import { HomeComponent } from './Page/home/home.component';
import { NotFoundComponent } from './Page/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'client-registration', component: ClientRegistrationComponent },
  { path: '**', component: NotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
