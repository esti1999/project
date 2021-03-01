import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { HttpClientModule } from '@angular/common/http';
//import components
import { LoginComponent } from './components/login/login.component';
import { AssistedComponent } from './assisted/assisted.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AssistedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
