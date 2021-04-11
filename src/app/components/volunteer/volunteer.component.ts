import { Component, OnInit } from '@angular/core';
import { Availability } from 'src/app/classes/availability';
import { CarLicense } from 'src/app/classes/car-license';
import { City } from 'src/app/classes/city';
import { Gender } from 'src/app/classes/gender';
import { Language } from 'src/app/classes/language';
import { PersonalStatus } from 'src/app/classes/personal-status';
import { VolunteeringDomain } from 'src/app/classes/volunteering-domain';
import { WeaponsLicense } from 'src/app/classes/weapons-license';
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
  constructor(public Volunteer:VolunteerService, ) { }

  list:PersonalStatus[]
  newPersonalStatus: PersonalStatus = new PersonalStatus();
  
  list1:Gender[]
  newGender: Gender = new Gender();

  list2:CarLicense[]
  newCarLicense: CarLicense = new CarLicense();

  list3:WeaponsLicense[]
  newWeaponsLicense: WeaponsLicense = new WeaponsLicense();

  list4: Availability[]
  newAvailability: Availability = new Availability();

  list5:Language[]
  newLanguage: Language = new Language();

  list6:City[]
  newCity: City = new City();


  ngOnInit(){
    this.Volunteer.getPersonalStatus().subscribe(data=>{
      this.list = data;
    })
    this.Volunteer.getGender().subscribe(data=>{
      this.list1 = data;
    })
    this.Volunteer.getCarLicense().subscribe(data=>{
      this.list2 = data;
    })
    this.Volunteer.getWeaponsLicense().subscribe(data=>{
      this.list3 = data;
    })
    this.Volunteer.getAvailability().subscribe(data=>{
      this.list4 = data;
    })
    this.Volunteer.getLanguage().subscribe(data=>{
      this.list5 = data;
    })
    this.Volunteer.getCity().subscribe(data=>{
      this.list6 = data;
    })

  }
  add(){
    this.Volunteer.addValunteer().subscribe(data=>{
      // this.Volunteer.listVolunteer = data
      if(data==true)
        alert("הרשמתך בוצעה בהצלחה")
      else 
        alert("הרשמתך נכשלה")

      })
    this.Volunteer.Volunteer = new Volunteer();
  }
  
}
