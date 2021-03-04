import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { AssistedComponent } from './components/assisted/assisted.component';
import { VolunteeringDomainComponent } from './components/volunteering-domain/volunteering-domain.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'volunteer', component: VolunteerComponent},
  { path: 'assisted', component: AssistedComponent},
  { path: 'volunteering-domain', component: VolunteeringDomainComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
