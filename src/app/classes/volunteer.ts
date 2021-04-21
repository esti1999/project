import { Language } from "./language";
import { VolunteerLanguage } from "./volunteer-language";


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
         public validity?:Date,
         public languages?:Array<Language>,
         ) { }
}
