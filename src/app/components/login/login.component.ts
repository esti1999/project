import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit(){
    this.apiService.login()
    .subscribe(data=>{
      debugger;
      console.log("my data",data)
    });
  }

}
