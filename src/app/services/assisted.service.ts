import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assisted } from '../classes/assisted';
import { Gender } from '../classes/gender';
import { Language } from '../classes/language';
import { PersonalStatus } from '../classes/personal-status';
import { City } from '../classes/city';
import { Days } from '../classes/days';
import { Shifts } from '../classes/shifts';
import { Availability } from '../classes/availability';
import { Volunteer } from '../classes/volunteer';

@Injectable({
  providedIn: 'root'
})
export class AssistedService {
 
  url:string = "http://localhost:59782/api/assisted"
  listAssisted:Array<Assisted> = new Array<Assisted>()
  Assisted:Assisted = new Assisted();
  day: Days = new Days();
  shift: Shifts = new Shifts();
  myListDomain: any[] = []
  constructor(private http: HttpClient) {
    this.Assisted.languages = new Array<Language>()
    this.Assisted.availabilitys = new Array<Availability>()
   }

  add():Observable<Array<Assisted>>{
    return this.http.post<Array<Assisted>>(this.url+"/addAssisted" ,this.Assisted)
  }
  toEmbedAssisted() {
    return this.http.post<Assisted>(this.url + "/embededAssisted" , this.Assisted);
  }
  addAssisted():Observable<boolean>{
    return this.http.post<boolean>(this.url+"/addAssisted", this.Assisted)
  }
  getPersonalStatus():Observable<Array<PersonalStatus>>{
    return this.http.get<Array<PersonalStatus>>(this.url + "/GetPersonalStatus")
  } 
  getGender():Observable<Array<Gender>>{
    return this.http.get<Array<Gender>>(this.url + "/GetGender")
  } 
  getLanguage():Observable<Array<Language>>{
    return this.http.get<Array<Language>>(this.url + "/GetLanguage")
  }
  getCity():Observable<Array<City>>{
    return this.http.get<Array<City>>(this.url + "/GetCity")
  }
  getDays():Observable<Array<Days>>{
    return this.http.get<Array<Days>>(this.url + "/GetDays")
  }
  getShift():Observable<Array<Shifts>>{
    return this.http.get<Array<Shifts>>(this.url + "/GetShift")
  }
  getAvailability():Observable<Array<Availability>>{
    return this.http.get<Array<Availability>>(this.url + "/GetAvailability")
  } 
  getAvailabilitys():Observable<Array<Availability>>{
    return this.http.get<Array<Availability>>(this.url + "/GetAvailabilitys")
  }
  // getById(id_assisted:string):Observable<Assisted>{
  //   return this.http.get<Assisted>(this.url + "/getById")
  // }
 EmbededAssisteds(volunteer:Volunteer):Observable<Array<Assisted>> {
  return this.http.post<Array<Assisted>>(this.url + "/GetEmbededAssisteds",volunteer);
}
}
