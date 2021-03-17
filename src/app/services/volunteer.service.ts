import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gender } from '../classes/gender';
import { PersonalStatus } from '../classes/personal-status';
import { Volunteer } from '../classes/volunteer';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
   listVolunteer:Array<Volunteer> = new Array<Volunteer>()
   Volunteer:Volunteer = new Volunteer();
   url:string = "http://localhost:59782/api/volunteer"
   constructor(private http:HttpClient) { }

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
