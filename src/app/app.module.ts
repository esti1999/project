import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { HttpClientModule } from '@angular/common/http';
//import components
import { LoginComponent } from './components/login/login.component';
import { AssistedComponent } from './components/assisted/assisted.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { VolunteeringDomainComponent } from './components/volunteering-domain/volunteering-domain.component';

// import services
import { AssistedService } from './services/assisted.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AssistedComponent,
    VolunteerComponent,
    VolunteeringDomainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AssistedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
