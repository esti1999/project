import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
