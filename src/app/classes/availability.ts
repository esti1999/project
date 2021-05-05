export class Availability{
<<<<<<< HEAD
    constructor(public code_availability?:number, public code_day?:number, public code_shift?:number, public IsSelected:boolean=false){}
=======
    constructor(
        public code_availability?:number,
        public code_day?:number,
        public day_description?:string,
        public code_shift?:number,
        public shift_description?:string,
        public IsSelected?:boolean
    ){}
>>>>>>> 76b55a1c475092a68083d317a9de65a52617564c
}