import { Component, OnInit } from '@angular/core';
import { VolunteeringDomain } from 'src/app/classes/volunteering-domain';
import { ApiService } from 'src/app/services/api.service';
import { VolunteeringDomainService } from 'src/app/services/volunteering-domain.service';


@Component({
  selector: 'app-volunteering-domain',
  templateUrl: './volunteering-domain.component.html',
  styleUrls: ['./volunteering-domain.component.css']
})
export class VolunteeringDomainComponent implements OnInit {
list:VolunteeringDomain[]
  newVolunteeringDomain: VolunteeringDomain = new VolunteeringDomain();
  constructor(private volunteeringDomain:VolunteeringDomainService) { }

  ngOnInit(): void {
    // this.volunteeringDomain.getVolunteeringDomain().subscribe(data=>{
    //   console.log(data)
    // })

    this.volunteeringDomain.getDomain().subscribe(data=>{
      this.list = data;
    })
  }
 
}
