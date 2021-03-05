import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'; 
import { Assisted } from '../../classes/assisted';

@Component({
  selector: 'app-assisted',
  templateUrl: './assisted.component.html',
  styleUrls: ['./assisted.component.css']
})
export class AssistedComponent implements OnInit {
  newAssisted: Assisted = new Assisted();
  constructor(private apiService:ApiService) { }

  ngOnInit(){
    this.apiService.login()
    .subscribe(data=>{
      debugger;
      console.log("my data",data)
    });
  }

}
