import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { Assisted } from 'src/app/classes/assisted';
import { Availability } from 'src/app/classes/availability';
import { Days } from 'src/app/classes/days';
import { Shifts } from 'src/app/classes/shifts';
import { AssistedService } from 'src/app/services/assisted.service';
import { VolunteerService } from 'src/app/services/volunteer.service';
import { VolunteeringDomainService } from 'src/app/services/volunteering-domain.service'
import { VolunteeringDomainComponent } from '../volunteering-domain/volunteering-domain.component';

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

  userType: string;

  mode: string;

  availabilitys: Availability[];

  subscription: Subscription;
  constructor(private route: ActivatedRoute, public Assisted: AssistedService, private router: Router, private volunteer:VolunteerService) {

  }

  ngOnInit(): void {
    this.userType = this.route.snapshot.params['userType']
    this.mode = this.route.snapshot.params['mode']


    this.Assisted.getDays().subscribe(data => {
      this.list4 = data;
    })
    this.Assisted.getShift().subscribe(data => {
      this.list5 = data;
    })
    if (this.Assisted.Assisted.availabilitys != undefined) {
      this.availabilitys = this.Assisted.Assisted.availabilitys.filter(a => a.IsSelected);

    }

  }

  isAvailabilitySelected(code_day, code_shift): boolean {
    if (this.Assisted.Assisted.availabilitys != undefined) {
      let availability = this.availabilitys.find(a => a.code_day == code_day && a.code_shift == code_shift);
      return availability != null;
    }
  }
  updateAvailability(event, code_day, code_shift) {
    let availability: Availability = this.Assisted.Assisted.availabilitys.find(a => a.code_day == code_day && a.code_shift == code_shift);
    if (availability) {
      if (event.target.checked) {
        this.Assisted.Assisted.availabilitys.find(a => a.code_day == code_day && a.code_shift == code_shift).IsSelected = true;
      }
    else
        this.Assisted.Assisted.availabilitys.find(a => a.code_day == code_day && a.code_shift == code_shift).IsSelected = false;
    
  }
}


add(){
  this.Assisted.addAssisted().subscribe(data => {
    // this.Assisted.listAssisted = data
    if (data == true) {
      alert("הרשמתך בוצעה בהצלחה")

      // const source = interval(10000 * 6);
      // const text = 'Your Text Here';
      // this.subscription = source.subscribe(val => this.toEmbed());
    }
    else
      alert("הרשמתך נכשלה")
  })
}

// toEmbed(){
//   console.log("שיבוץ")
//   this.Assisted.toEmbedAssisted().subscribe(res => {
//     if (res)
//       console.log("שבוץ")
//   });
// }
getEmbeddings(){
  this.Assisted.EmbededAssisteds(this.volunteer.Volunteer).subscribe(data=>{
    let Assisteds:Assisted[]=data
  })
}
ngOnDestroy() {
 // this.subscription.unsubscribe();
}
}
