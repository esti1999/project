import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { VolunteeringDomain } from '../../classes/volunteering-domain'

@Component({
  selector: 'app-volunteering-domain',
  templateUrl: './volunteering-domain.component.html',
  styleUrls: ['./volunteering-domain.component.css']
})
export class VolunteeringDomainComponent implements OnInit {

  newVolunteeringDomain: VolunteeringDomain = new VolunteeringDomain();
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }

}
