import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gender } from '../classes/gender';
import { PersonalStatus } from '../classes/personal-status';
import { Volunteer } from '../classes/volunteer';
import { Language } from '../classes/language';
import { CarLicense } from '../classes/car-license';
import { WeaponsLicense } from '../classes/weapons-license';
import { Days } from '../classes/days';
import { Shifts } from '../classes/shifts';
import { City } from '../classes/city';
import { Services } from '../classes/services';
import { CarLicenseVolunteer } from '../classes/car-license-volunteer';
import { WeaponsLicenseVolunteer } from '../classes/weapons-license-volunteer';
import { Availability } from '../classes/availability';
import { Domain, VolunteeringDomain } from '../classes/volunteering-domain';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
 
  url:string = "http://localhost:59782/api/volunteer"
  listVolunteer:Array<Volunteer> = new Array<Volunteer>();
  Volunteer:Volunteer = new Volunteer();
  day: Days = new Days();
  shift: Shifts = new Shifts();
  service: Services = new Services();
  myListDomain: any[] = []
   constructor(private http:HttpClient) {
     this.Volunteer.languages = new Array<Language>()
     this.Volunteer.availabilitys = new Array<Availability>()
    //  this.Volunteer.volunteeringdomains = new Array<VolunteeringDomain>()
    }

  //  addVolunteerDomaim(): Observable<boolean> {
  // }

  addVolunteer():Observable<boolean>{
  //   this.Volunteer.domain=[]
  //  this.Volunteer.domain = this.myListDomain;
  //  this.Volunteer.availability = {
  //   code_availability:0,
  //   code_day:this.day.code_day,
  //   code_shift:this.shift.code_shift

  // }
 return this.http.post<boolean>(this.url+"/addVolunteer", this.Volunteer)
  }
  add():Observable<Array<Volunteer>>{
    return this.http.post<Array<Volunteer>>(this.url+"/addVolunteer", this.Volunteer)
  }
  getLanguage():Observable<Array<Language>>{
    return this.http.get<Array<Language>>(this.url+"/GetLanguage")
  }
   getPersonalStatus():Observable<Array<PersonalStatus>>{
    return this.http.get<Array<PersonalStatus>>(this.url + "/GetPersonalStatus")
  } 
   getGender():Observable<Array<Gender>>{
    return this.http.get<Array<Gender>>(this.url + "/GetGender")
  } 
   getCarLicense():Observable<Array<CarLicense>>{
    return this.http.get<Array<CarLicense>>(this.url + "/GetCarLicense")
  } 
   getWeaponsLicense():Observable<Array<WeaponsLicense>>{
    return this.http.get<Array<WeaponsLicense>>(this.url + "/GetWeaponsLicense")
  }
  getDays():Observable<Array<Days>>{
    return this.http.get<Array<Days>>(this.url + "/GetDays")
  }
  getShift():Observable<Array<Shifts>>{
    return this.http.get<Array<Shifts>>(this.url + "/GetShift")
  }
  getCity():Observable<Array<City>>{
    return this.http.get<Array<City>>(this.url + "/GetCity")
  }
  getServices():Observable<Array<Services>>{
    return this.http.get<Array<Services>>(this.url + "/GetServices")
  }
  getAvailability():Observable<Array<Availability>>{
    return this.http.get<Array<Availability>>(this.url + "/GetAvailability")
  } 
}


