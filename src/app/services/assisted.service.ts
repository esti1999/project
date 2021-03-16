import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assisted } from '../classes/assisted';

@Injectable({
  providedIn: 'root'
})
export class AssistedService {
  listAssisted:Array<Assisted> = new Array<Assisted>()
  Assisted:Assisted = new Assisted();
  url:string = "http://localhost:59782/api/assisted"
  constructor(private http: HttpClient) { }

  add():Observable<Array<Assisted>>{
    return this.http.post<Array<Assisted>>(this.url+"/addAssisted", this.Assisted)
  }
  
}
