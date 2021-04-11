import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gender } from '../classes/gender';
import { PersonalStatus } from '../classes/personal-status';
import { Volunteer } from '../classes/volunteer';
import { Language } from '../classes/language';
import { CarLicense } from '../classes/car-license';
import { WeaponsLicense } from '../classes/weapons-license';
import { Availability } from '../classes/availability';
import { City } from '../classes/city';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
  url:string = "http://localhost:59782/api/volunteer"
  listVolunteer:Array<Volunteer> = new Array<Volunteer>()
  Volunteer:Volunteer = new Volunteer();
  myListDomain: any[] = []
   constructor(private http:HttpClient) { }


  addValunteer():Observable<boolean>{
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
   getAvailability():Observable<Array<Availability>>{
    return this.http.get<Array<Availability>>(this.url + "/GetAvailability")
  }
  getCity():Observable<Array<City>>{
    return this.http.get<Array<City>>(this.url + "/GetCity")
  }
}
