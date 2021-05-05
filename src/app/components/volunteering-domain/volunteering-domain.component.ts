import { NgIf } from '@angular/common';
import { ngModuleJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { Domain, VolunteeringDomain } from 'src/app/classes/volunteering-domain';
import { ApiService } from 'src/app/services/api.service';
import { AssistedService } from 'src/app/services/assisted.service';
import { VolunteerService } from 'src/app/services/volunteer.service';
import { VolunteeringDomainService } from 'src/app/services/volunteering-domain.service';


@Component({
  selector: 'app-volunteering-domain',
  templateUrl: './volunteering-domain.component.html',
  styleUrls: ['./volunteering-domain.component.css']
})
export class VolunteeringDomainComponent implements OnInit {
  list:VolunteeringDomain[]
  newVolunteeringDomain: VolunteeringDomain = new VolunteeringDomain();
  kind:string;
  mode:string;
  constructor(private volunteer:VolunteerService, private assisted:AssistedService, private volunteeringDomain: VolunteeringDomainService , private route:ActivatedRoute, private router: Router) {
 
  }

  listDomain:any[] =[]

  selectDomain(code_volunteering:number, domain:Domain){
    if(this.kind=="true")
    {
      // this.assisted.myListDomain.push(code)
      !this.assisted.Assisted.volunteeringdomains?this.assisted.Assisted.volunteeringdomains=new Array<VolunteeringDomain>():null
      this.assisted.Assisted.volunteeringdomains.push({
                                                code_volunteering:code_volunteering,
                                                code_domain:domain.code_domain,
                                                descriptoin:domain.description
                                              })
    }
    else{
      !this.volunteer.Volunteer.volunteeringdomains?this.volunteer.Volunteer.volunteeringdomains=new Array<VolunteeringDomain>():null
      this.volunteer.Volunteer.volunteeringdomains.push({
                                                      code_volunteering:code_volunteering,
                                                      code_domain:domain.code_domain,
                                                      descriptoin:domain.description
                                                    })
    }
  }

  ngOnInit(): void {

    this.kind=this.route.snapshot.params['kind']
    this.mode=this.route.snapshot.params['mode']


    this.volunteeringDomain.getDomain().subscribe(data=>{
      this.list = data;
      this.list.forEach(elemnt=>{
        this.volunteeringDomain.getVolunteeringDomain(elemnt.code_domain).subscribe(res=>{
          var dom ={
            domain:elemnt,
            volunteerDomain:res
          }
            this.listDomain.push(dom);
        })
      })
    })
  }
 
  Link(){
    if(this.kind=="true")
    {
     // this.assisted.myListDomain=this.listDomain
      this.router.navigate(["schedule/"+this.mode])
    }
    else{
      if(this.kind=="false")
      {
       // this.volunteer.myListDomain=this.listDomain
        this.router.navigate(["volunteer/"+this.mode])
      }
    }
  }
}