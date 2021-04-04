import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assisted } from 'src/app/classes/assisted';
import{ AssistedService } from 'src/app/services/assisted.service';
import{ VolunteerService } from 'src/app/services/volunteer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public AssistedLogin:AssistedService, public VolunteerLogin:VolunteerService ,public rout:Router) { }

  ngOnInit(): void {
  }
  Enter()
  {
    // this.AssistedLogin.

 
  }
}
