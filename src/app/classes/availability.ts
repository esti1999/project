export class Availability{

    constructor(
        public code_availability?:number,
        public code_day?:number,
        public day_description?:string,
        public code_shift?:number,
        public shift_description?:string,
        public IsSelected?:boolean
    ){}

}