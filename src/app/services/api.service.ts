import { Injectable } from '@angular/core';
import { AppSettings } from '../appSetging';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Assisted } from '../classes/assisted';
import { Volunteer } from '../classes/volunteer';

const ApiBaseRoute = AppSettings.API_ENDPOINT

@Injectable({
  providedIn: 'root'
})
 
export class ApiService {
   
  newAssisted:Assisted = new Assisted();
  newVolunteer:Volunteer = new Volunteer();
  url:string = "http://localhost:59782/api/Login"

  constructor(private http:HttpClient) { }

 GetEailAddressAndPassword(e_mail:string, password:string):Observable<Volunteer>{
   return this.http.get<Volunteer>(this.url+"/GetEmailAddressPassword/" + e_mail + '/' + password)
 }

 GetEailAddressAndPassword1(e_mail:string, password:string):Observable<Assisted>{
  return this.http.get<Assisted>(this.url+"/GetEmailAddressPassword1/" + e_mail + '/' + password)
}
}