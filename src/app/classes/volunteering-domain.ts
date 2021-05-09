export class VolunteeringDomain {
    constructor(
        public code_domain?:number,
        public code_volunteering?:number,
        public description?:string,
        public IsSelected?:boolean
          ){}
}

export class Domain {
    constructor(public code_domain:number,public description:string){}
}