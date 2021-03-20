import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Volunteer } from '../classes/volunteer';
import { Language } from '../classes/language';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  url:string = "http://localhost:59782/api/volunteer"
   constructor(private http:HttpClient) { }

  addValunteer(volunteer:Volunteer):Observable<boolean>{
    return this.http.post<boolean>(this.url+"/addVolunteer", volunteer)
  }

  getLanguages():Observable<Array<Language>>{
    return this.http.get<Array<Language>>(this.getLanguages+"/GetLanguages")
  }

}
