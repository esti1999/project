import { Availability } from "./availability";
import { Language } from "./language";
import { VolunteeringDomain } from "./volunteering-domain";

export class Assisted {
    constructor(public id_assisted?: number, 
        public first_name?: string, 
        public last_name?: string,
        public date_birth?: Date,
        public code_status?: number,
        public code_gender?: number,
        public code_city?: number,
        public street?: string,
        public number_house?: number,
        public number_building?: number,
        public number_floor?: number,
        public postal_code?: string,
        public e_mail?: string,
        public phone?: string,
        public password?: string,
        public languages?:Array<Language>,
        public domain?: string[],
        public volunteeringdomains?:Array<VolunteeringDomain>,
        public availability?:Availability)
       
          { }
}

