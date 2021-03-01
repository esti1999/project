import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit(){
    this.apiService.login()
    .subscribe(data=>{
      debugger;
      console.log("my data",data)
    });
  }

}
