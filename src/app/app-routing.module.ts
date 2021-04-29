import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { AssistedComponent } from './components/assisted/assisted.component';
import { VolunteeringDomainComponent } from './components/volunteering-domain/volunteering-domain.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { AskingComponent } from './components/asking/asking.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'volunteer/:mode', component: VolunteerComponent},
  { path: 'schedule/:userType', component: ScheduleComponent},
  { path: 'assisted/:mode', component: AssistedComponent},
  { path: 'volunteering-domain/:kind/:mode', component: VolunteeringDomainComponent},
  { path: 'assistedVolunteeringDomain', component: AssistedComponent},
  { path: 'volunteerVolunteeringDomain', component: VolunteerComponent},
  { path: 'asking', component: AskingComponent},
  { path: 'volunteering-domain', component: VolunteeringDomainComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
