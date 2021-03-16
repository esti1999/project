import { Component, OnInit } from '@angular/core';
import { AssistedService } from 'src/app/services/assisted.service'; 
import { Assisted } from '../../classes/assisted';

@Component({
  selector: 'app-assisted',
  templateUrl: './assisted.component.html',
  styleUrls: ['./assisted.component.css']
})
export class AssistedComponent implements OnInit {
  // newAssisted: Assisted = new Assisted();
  constructor(private Assisted:AssistedService) { }

  ngOnInit(){
    // this.apiService.login()
    // .subscribe(data=>{
    //   debugger;
    //   console.log("my data",data)
    // });
  }
  add(){
    this.Assisted.add().subscribe(data=>{this.Assisted.listAssisted = data
    alert("הרשמתך בוצעה בהצלחה")})
    this.Assisted.Assisted = new Assisted();
  }

}
