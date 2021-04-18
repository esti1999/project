import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gender } from '../classes/gender';
import { PersonalStatus } from '../classes/personal-status';
import { Volunteer } from '../classes/volunteer';
import { Language } from '../classes/language';
import { CarLicense } from '../classes/car-license';
import { WeaponsLicense } from '../classes/weapons-license';
import { Availability } from '../classes/availability';
import { City } from '../classes/city';
import { Services } from '../classes/services';
import { CarLicenseVolunteer } from '../classes/car-license-volunteer';
import { WeaponsLicenseVolunteer } from '../classes/weapons-license-volunteer';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
  url:string = "http://localhost:59782/api/volunteer"
  listVolunteer:Array<Volunteer> = new Array<Volunteer>();
  Volunteer:Volunteer = new Volunteer();
  service: Services = new Services();
  // personalStatus: PersonalStatus = new PersonalStatus();
  // gender: Gender = new Gender();
  // carLicense: CarLicense = new CarLicense();
  // weaponsLicense:WeaponsLicense = new WeaponsLicense();
  // availability: Availability = new Availability();
  // language: Array<Language> = new Array<Language>();
  // language:Language[]=[];
  // city: City = new City();
  // release_date: Services = new Services();
  // description: Services = new Services();
  // validityc: CarLicenseVolunteer = new CarLicenseVolunteer();
  // validityw: WeaponsLicenseVolunteer = new WeaponsLicenseVolunteer();
 


  myListDomain: any[] = []
   constructor(private http:HttpClient) { }


  addVolunteer():Observable<boolean>{

  //   this.Volunteer.id_volunteer = "322766730"
  //   this.Volunteer.firstName_volunteer="hcf"
  //   this.Volunteer.lastName_volunteer="kj";
  //  this.Volunteer.date_of_birth= new Date()
  //  this.Volunteer.code_status=1
  //  this.Volunteer.code_gender=2
  //  this.Volunteer.code_city=1
  //  this.Volunteer.street="fgjk"
  //  this.Volunteer.postal_code="34567"
  //  this.Volunteer.house_number=5
  //  this.Volunteer.number_floor=3
  //  this.Volunteer.bulding_number=2
  //  this.Volunteer.code_language=1
  //  this.Volunteer.code_license_car=2
  //  this.Volunteer.e_mail="poiuytre"
  //  this.Volunteer.code_service=5
  //  this.Volunteer.code_license_weapon=1
  //  this.Volunteer.code_volunteering_domain=1
  //  this.Volunteer.code_availability=1
  //  this.Volunteer.postal_code="12345"
  //  this.Volunteer.phone="34567"
  //  this.Volunteer.password="qwertyui"



return this.http.post<boolean>(this.url+"/addVolunteer", this.Volunteer)
  }
  add():Observable<Array<Volunteer>>{
    return this.http.post<Array<Volunteer>>(this.url+"/addVolunteer", this.Volunteer)
  }
  getLanguage():Observable<Array<Language>>{
    return this.http.get<Array<Language>>(this.url+"/GetLanguage")
  }
   getPersonalStatus():Observable<Array<PersonalStatus>>{
    return this.http.get<Array<PersonalStatus>>(this.url + "/GetPersonalStatus")
  } 
   getGender():Observable<Array<Gender>>{
    return this.http.get<Array<Gender>>(this.url + "/GetGender")
  } 
   getCarLicense():Observable<Array<CarLicense>>{
    return this.http.get<Array<CarLicense>>(this.url + "/GetCarLicense")
  } 
   getWeaponsLicense():Observable<Array<WeaponsLicense>>{
    return this.http.get<Array<WeaponsLicense>>(this.url + "/GetWeaponsLicense")
  }
   getAvailability():Observable<Array<Availability>>{
    return this.http.get<Array<Availability>>(this.url + "/GetAvailability")
  }
  getCity():Observable<Array<City>>{
    return this.http.get<Array<City>>(this.url + "/GetCity")
  }
  getServices():Observable<Array<Services>>{
    return this.http.get<Array<Services>>(this.url + "/GetServices")
  }
}
