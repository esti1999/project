import { Injectable } from '@angular/core';
import { AppSettings } from '../appSetging';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const ApiBaseRoute = AppSettings.API_ENDPOINT

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public login():Observable<any>{
  
    return this.http.get<any>(`${ApiBaseRoute}/Login/login`)
   // `${BASE_URL}/login`
  }

 GetEailAddressAngPassword()
 {}

}
