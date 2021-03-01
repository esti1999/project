import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VolunteeringDomain } from '../classes/volunteering-domain';

@Injectable({
  providedIn: 'root'
})
export class VolunteeringDomainService {
 listVolunteeringDomain:Array<VolunteeringDomain> = new Array<VolunteeringDomain>()
 volunteeringDomain:VolunteeringDomain = new VolunteeringDomain();
 url:string = "http://localhost:59782/api/volunteeringDomain"
 
  constructor(private http:HttpClient) { }
  
}
