import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/classes/language';
import { ApiService } from 'src/app/services/api.service';
import { VolunteerService } from 'src/app/services/volunteer.service';
import { Volunteer } from '../../classes/volunteer';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  volunteer: Volunteer;
  languages:Array<Language>

  constructor(private volunteerService:VolunteerService) { }

  ngOnInit(){
    this.volunteerService.getLanguages().subscribe(data=>{
      this.languages=data
    })
  }

  addValunteer(){
    this.volunteerService.addValunteer(this.volunteer).subscribe(data=>{
      alert("הרשמתך בוצעה בהצלחה")
    })
    this.volunteer = new Volunteer();
  }
 
}
