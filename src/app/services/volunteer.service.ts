import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gender } from '../classes/gender';
import { PersonalStatus } from '../classes/personal-status';
import { Volunteer } from '../classes/volunteer';
import { Language } from '../classes/language';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  url:string = "http://localhost:59782/api/volunteer"
  listVolunteer:Array<Volunteer> = new Array<Volunteer>()
  Volunteer:Volunteer = new Volunteer();
   constructor(private http:HttpClient) { }


  addValunteer(volunteer:Volunteer):Observable<boolean>{
    return this.http.post<boolean>(this.url+"/addVolunteer", volunteer)
  }

  getLanguages():Observable<Array<Language>>{
    return this.http.get<Array<Language>>(this.getLanguages+"/GetLanguages")
  }


   add():Observable<Array<Volunteer>>{
     return this.http.post<Array<Volunteer>>(this.url+"/addVolunteer", this.Volunteer)
   }
   getPersonalStatus():Observable<Array<PersonalStatus>>{
    return this.http.get<Array<PersonalStatus>>(this.url + "/GetPersonalStatus")
  } 
  getGender():Observable<Array<Gender>>{
    return this.http.get<Array<Gender>>(this.url + "/GetGender")
  } 
}
