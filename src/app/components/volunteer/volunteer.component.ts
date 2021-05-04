import { Component, OnInit } from '@angular/core';
// import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Availability } from 'src/app/classes/availability';
import { CarLicense } from 'src/app/classes/car-license';
import { City } from 'src/app/classes/city';
import { Days } from 'src/app/classes/days';
import { Gender } from 'src/app/classes/gender';
import { Language } from 'src/app/classes/language';
import { PersonalStatus } from 'src/app/classes/personal-status';
import { Services } from 'src/app/classes/services';
import { Shifts } from 'src/app/classes/shifts';
import { VolunteeringDomain } from 'src/app/classes/volunteering-domain';
import { WeaponsLicense } from 'src/app/classes/weapons-license';
import { ApiService } from 'src/app/services/api.service';
import { VolunteerService } from 'src/app/services/volunteer.service';
import { Volunteer } from '../../classes/volunteer';
import { FormControl, FormGroupDirective, FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})

export class VolunteerComponent implements OnInit {
  // newVolunteer: Volunteer = new Volunteer();

  constructor(public Volunteer: VolunteerService, private route: ActivatedRoute) { }

  mode: string

  list: PersonalStatus[]
  newPersonalStatus: PersonalStatus = new PersonalStatus();

  list1: Gender[]
  newGender: Gender = new Gender();

  list2: CarLicense[]
  newCarLicense: CarLicense = new CarLicense();

  list3: WeaponsLicense[]
  newWeaponsLicense: WeaponsLicense = new WeaponsLicense();

  list4: Days[]
  newDay: Days = new Days();

  list5: Language[]
  newLanguage: Language = new Language();

  list6: City[]
  newCity: City = new City();

  list7: Services[]
  newServices: Services = new Services();


  l_language = [0, 0, 0, 0, 0, 0]

  avalabilitys:Availability[]

  list8: Shifts[]
  newShift: Shifts = new Shifts();

  car: boolean ;
  weapon: boolean ;

  password2: string = "";

  availabilitys: Availability[];

  ngOnInit() {

   this.mode = this.route.snapshot.params['mode']
   this.car = this.Volunteer.Volunteer.code_car_license?true:false;
   this.weapon = this.Volunteer.Volunteer.code_weapons_license?true:false;
   this.password2=this.Volunteer.Volunteer.password;



    this.Volunteer.getPersonalStatus().subscribe(data => {
      this.list = data;
    })
    this.Volunteer.getGender().subscribe(data => {
      this.list1 = data;
    })
    this.Volunteer.getCarLicense().subscribe(data => {
      this.list2 = data;
    })
    this.Volunteer.getWeaponsLicense().subscribe(data => {
      this.list3 = data;
    })
    this.Volunteer.getDays().subscribe(data => {
      this.list4 = data;
    })

    this.Volunteer.getAvailabilitys().subscribe(data => {
      if (this.Volunteer.Volunteer.availabilitys.length == 0) {
        this.Volunteer.Volunteer.availabilitys = data;
      }
    })
    this.Volunteer.getShift().subscribe(data => {
      this.list8 = data;
    })
    this.Volunteer.getLanguage().subscribe(data => {
      // this.list5 = data;
      if (this.Volunteer.Volunteer.languages.length == 0) {
        this.Volunteer.Volunteer.languages = data;
      }
    })
    this.Volunteer.getCity().subscribe(data => {
      this.list6 = data;
    })
    this.Volunteer.getServices().subscribe(data => {
      this.list7 = data;
    })
    // this.Volunteer.getAvailabilityVolunteer().subscribe(data=>{
    //   if(this.Volunteer.Volunteer.availabilitys.length==0){
    //     this.Volunteer.Volunteer.availabilitys=data;
    //   }
    // })
    this.availabilitys = this.Volunteer.Volunteer.availabilitys.filter(a => a.IsSelected);

  }
  isAvailabilitySelected(code_day, code_shift): boolean {
    let availability = this.availabilitys.find(a => a.code_day == code_day && a.code_shift == code_shift);
    return availability != null;
  }
  updateAvailability(event, code_day, code_shift){
    if(event.target.checked)
    this.Volunteer.Volunteer.availabilitys.find(a=>a.code_day==code_day && a.code_shift==code_shift).IsSelected=true;
    else
    this.Volunteer.Volunteer.availabilitys.find(a=>a.code_day==code_day && a.code_shift==code_shift).IsSelected=false;
  }
  add() {
    this.Volunteer.addVolunteer().subscribe(data => {
      // this.Volunteer.listVolunteer = data
      if (data == true) {
        //  this.Volunteer.addVolunteerDomaim();
        alert("הרשמתך בוצעה בהצלחה")
      }
      else
        alert("הרשמתך נכשלה")
    })

  }
  trackByIndex(index: number, value: any) {
    return index;
  }
}

