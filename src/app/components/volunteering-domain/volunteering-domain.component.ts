import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Domain, VolunteeringDomain } from 'src/app/classes/volunteering-domain';
import { AssistedService } from 'src/app/services/assisted.service';
import { VolunteerService } from 'src/app/services/volunteer.service';
import { VolunteeringDomainService } from 'src/app/services/volunteering-domain.service';

@Component({
  selector: 'app-volunteering-domain',
  templateUrl: './volunteering-domain.component.html',
  styleUrls: ['./volunteering-domain.component.css']
})
export class VolunteeringDomainComponent implements OnInit {
  list: Domain[];
  selectedVolunteerings: VolunteeringDomain[] = [];
  newVolunteeringDomain: VolunteeringDomain = new VolunteeringDomain();
  kind: string;
  mode: string;
  title:string;
  constructor(private volunteer: VolunteerService, private assisted: AssistedService, private volunteeringDomain: VolunteeringDomainService, private route: ActivatedRoute, private router: Router) { }
  listDomain: any[] = []
  ngOnInit(): void {
    this.kind = this.route.snapshot.params['kind']
    this.mode = this.route.snapshot.params['mode']
    this.kind =="true"? this.title = "תחומי התנדבות" :"תחומי עזרה"
    if(this.mode=="update")
    {
     this.kind == "true" ? this.selectedVolunteerings = this.assisted.Assisted.volunteeringdomains.filter(x=>x.IsSelected==true) :
      this.selectedVolunteerings = this.volunteer.Volunteer.volunteeringdomains.filter(x=>x.IsSelected==true);
    }
      this.volunteeringDomain.getDomain().subscribe(data => {
      this.list = data;
      this.list.forEach(elemnt => {
        this.volunteeringDomain.getVolunteeringDomain(elemnt.code_domain).subscribe(res => {
          var dom = {
            domain: elemnt,
            volunteerDomain: res,
            isShow: false
          }
          this.listDomain.push(dom);
        })
      })
    })
  }
  // selectDomain(code_volunteering: number, domain: Domain) {
  //   if (this.kind == "true") {
  //     // this.assisted.myListDomain.push(code)
  //     !this.assisted.Assisted.volunteeringdomains ? this.assisted.Assisted.volunteeringdomains = new Array<VolunteeringDomain>() : null
  //     this.assisted.Assisted.volunteeringdomains.push({
  //       code_volunteering: code_volunteering,
  //       code_domain: domain.code_domain,
  //       descriptoin: domain.description
  //     })
  //   }
  //   else {
  //     !this.volunteer.Volunteer.volunteeringdomains ? this.volunteer.Volunteer.volunteeringdomains = new Array<VolunteeringDomain>() : null
  //     this.volunteer.Volunteer.volunteeringdomains.push({
  //       code_volunteering: code_volunteering,
  //       code_domain: domain.code_domain,
  //       descriptoin: domain.description
  //     })
  //   }
  // }
  Link() {
    if (this.kind == "true") {
      this.assisted.Assisted.volunteeringdomains = this.selectedVolunteerings;
      this.router.navigate(["assisted/" + this.mode])
    }
    else {
      if (this.kind == "false") {
        this.volunteer.Volunteer.volunteeringdomains = this.selectedVolunteerings;
        this.router.navigate(["volunteer/" + this.mode])
      }
    }
  }
  suggest(item: any) {
    item.isShow = !item.isShow;
  }
  isVolunteerongSelected(volunteeringDomain: VolunteeringDomain) {
    return this.selectedVolunteerings.findIndex((item) => item.code_volunteering === volunteeringDomain.code_volunteering) > -1 ? true : false;
  }
  selectVolunteering(volunteeringDomain: VolunteeringDomain) {
    this.selectedVolunteerings.find((item) => item.code_volunteering === volunteeringDomain.code_volunteering) ?
      this.selectedVolunteerings = this.selectedVolunteerings.filter((item) => item.code_volunteering !== volunteeringDomain.code_volunteering) :
      this.selectedVolunteerings.push(volunteeringDomain);
  }
}