import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assisted } from '../classes/assisted';
import { Gender } from '../classes/gender';
import { Language } from '../classes/language';
import { PersonalStatus } from '../classes/personal-status';
import { City } from '../classes/city';

@Injectable({
  providedIn: 'root'
})
export class AssistedService {
  listAssisted:Array<Assisted> = new Array<Assisted>()
  Assisted:Assisted = new Assisted();
  url:string = "http://localhost:59782/api/assisted"
  myListDomain: any[] = []
  constructor(private http: HttpClient) { }

  add():Observable<Array<Assisted>>{
    return this.http.post<Array<Assisted>>(this.url+"/addAssisted", this.Assisted)
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
}
