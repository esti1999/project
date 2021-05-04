import { Language } from "./language";
import { VolunteerLanguage } from "./volunteer-language";
import {VolunteerDomain} from "./volunteer-domain"
import { Availability } from "./availability";
import { Domain, VolunteeringDomain } from "./volunteering-domain";

export class Volunteer {
    constructor(public id_volunteer?: string,
         public firstName_volunteer?: string, 
         public lastName_volunteer?: string, 
         public date_of_birth?: Date, 
         public code_gender?: number, 
         public code_status?: number, 
         public code_city?: number, 
         public street?: string, 
         public postal_code?: string, 
         public house_number?: number,
         public bulding_number?: number, 
         public number_floor?: number, 
         public e_mail?: string,  
         public code_service?: number, 
         public phone?: string, 
         public password?: string,
         public release_date?:Date,
         public validityc?:Date,
         public validityw?:Date,
         public code_weapons_license?:number,
         public code_car_license?:number,
         public description_service?:string,
         public languages?:Array<Language>,
         public availabilitys?:Array<Availability>,
         public volunteeringdomains?:Array<VolunteeringDomain>,
        //  public domain?: string[],
        //  public availability?:Availability 

         ) {
            //  this.domain = []
           }
}
