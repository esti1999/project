import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { HttpClientModule } from '@angular/common/http';
//import components
import { LoginComponent } from './components/login/login.component';
import { AssistedComponent } from './components/assisted/assisted.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { VolunteeringDomainComponent } from './components/volunteering-domain/volunteering-domain.component';
// import services
import { ApiService } from './services/api.service';
import { AssistedService } from './services/assisted.service';
import { VolunteerService } from './services/volunteer.service';
import { VolunteeringDomainService } from './services/volunteering-domain.service';
import { ScheduleComponent } from './components/schedule/schedule.component';


// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { CalendarModule, DateAdapter } from 'angular-calendar';
// import { DemoUtilsModule } from '../demo-utils/module';
// import { DemoComponent } from './component';
// import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AssistedComponent,
    VolunteerComponent,
    VolunteeringDomainComponent,
    ScheduleComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService, AssistedService, VolunteerService, VolunteeringDomainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
