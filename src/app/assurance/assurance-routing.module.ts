import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowAssuranceComponent } from './Page/show-assurance/show-assurance.component';
import { AddAssuranceComponent } from './Page/add-assurance/add-assurance.component';

const routes: Routes = [
  { path: '', component: ShowAssuranceComponent },
  {
    path: 'show',
    pathMatch: 'full',
    redirectTo: '',
  },
  { path: 'add', component: AddAssuranceComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssuranceRoutingModule { }
