import { Component, OnInit } from '@angular/core';
import { Gender } from 'src/app/classes/gender';
import { PersonalStatus } from 'src/app/classes/personal-status';
import { ApiService } from 'src/app/services/api.service';
import { VolunteerService } from 'src/app/services/volunteer.service';
import { Volunteer } from '../../classes/volunteer';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
  // newVolunteer: Volunteer = new Volunteer();
  constructor(private Volunteer:VolunteerService) { }

  list:PersonalStatus[]
  newPersonalStatus: PersonalStatus = new PersonalStatus();
  
  list1:Gender[]
  newGender: Gender = new Gender();

  ngOnInit(){
    // this.apiService.login()
    // .subscribe(data=>{
    //   debugger;
    //   console.log("my data",data)
    // });
    this.Volunteer.getPersonalStatus().subscribe(data=>{
      this.list = data;
    })
    this.Volunteer.getGender().subscribe(data=>{
      this.list1 = data;
    })
  }
  add(){
    this.Volunteer.add().subscribe(data=>{this.Volunteer.listVolunteer = data
    alert("הרשמתך בוצעה בהצלחה")})
    this.Volunteer.Volunteer = new Volunteer();
  }

}
