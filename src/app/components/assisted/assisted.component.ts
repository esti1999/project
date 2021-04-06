import { Component, OnInit } from '@angular/core';
import { AssistedService } from 'src/app/services/assisted.service'; 
import { Assisted } from '../../classes/assisted';
import { PersonalStatus } from '../../classes/personal-status';
import { Gender } from '../../classes/gender';

@Component({
  selector: 'app-assisted',
  templateUrl: './assisted.component.html',
  styleUrls: ['./assisted.component.css']
})
export class AssistedComponent implements OnInit {
  // newAssisted: Assisted = new Assisted();
  constructor(public Assisted:AssistedService) { }
 list:PersonalStatus[]
 newPersonalStatus: PersonalStatus = new PersonalStatus();

 list1:Gender[]
 newGender: Gender = new Gender();
 
  ngOnInit(){
    this.Assisted.getPersonalStatus().subscribe(data=>{
      this.list = data;
    })
    this.Assisted.getGender().subscribe(data=>{
      this.list1 = data;
    })
  }
  add(){
    this.Assisted.add().subscribe(data=>{this.Assisted.listAssisted = data
    alert("הרשמתך בוצעה בהצלחה")})
    this.Assisted.Assisted = new Assisted();
  }
}
