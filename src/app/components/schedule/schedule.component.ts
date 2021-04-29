import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Days } from 'src/app/classes/days';
import { Shifts } from 'src/app/classes/shifts';
import { AssistedService } from 'src/app/services/assisted.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  
  list4: Days[]
  newDays: Days = new Days();
 
  
  list5: Shifts[]
  newShift: Shifts = new Shifts();

  userType:string;

  constructor( private route:ActivatedRoute, public AssistedAvailability: AssistedService) { 
    
  }

  ngOnInit(): void {
    this.userType=this.route.snapshot.params['userType']

    this.AssistedAvailability.getDays().subscribe(data=>{
      this.list4 = data;
    })
    this.AssistedAvailability.getShift().subscribe(data=>{
      this.list5 = data;
    })
  }
  

}
