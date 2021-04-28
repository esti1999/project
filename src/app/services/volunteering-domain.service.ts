import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Domain, VolunteeringDomain } from '../classes/volunteering-domain';

@Injectable({
  providedIn: 'root'
})
export class VolunteeringDomainService {

 listVolunteeringDomain:Array<VolunteeringDomain> = new Array<VolunteeringDomain>()
 volunteeringDomain:VolunteeringDomain = new VolunteeringDomain();
 url:string = "http://localhost:59782/api/volunteerDomain"
 
  constructor(private http:HttpClient) { }

 getVolunteeringDomain(code_domain:number):Observable<Array<VolunteeringDomain>>{
    return this.http.get<Array<VolunteeringDomain>>(this.url+"/getVolunteeringByDomain/" + code_domain)
 }

 getDomain():Observable<Array<Domain>>{
 return this.http.get<Array<Domain>>(this.url + "/GetVolunteeringDomain")
 }


}
