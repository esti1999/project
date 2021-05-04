import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { Days } from 'src/app/classes/days';
import { Shifts } from 'src/app/classes/shifts';
import { AssistedService } from 'src/app/services/assisted.service';
import { VolunteeringDomainService} from 'src/app/services/volunteering-domain.service'
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

  userType:string;

  mode:string;
  

  subscription: Subscription;
  constructor( private route:ActivatedRoute, public Assisted: AssistedService) { 
    
  }

  ngOnInit(): void {
    this.userType=this.route.snapshot.params['userType']
    this.mode=this.route.snapshot.params['mode']


    this.Assisted.getDays().subscribe(data=>{
      this.list4 = data;
    })
    this.Assisted.getShift().subscribe(data=>{
      this.list5 = data;
    })

  }



  add(){
    this.Assisted.addAssisted().subscribe(data=>{
      // this.Assisted.listAssisted = data
      if(data == true){
            alert("הרשמתך בוצעה בהצלחה")    

            // const source = interval(10000*6);
            // const text = 'Your Text Here';
            // this.subscription = source.subscribe(val => this.toEmbed());
          }
      else
            alert("הרשמתך נכשלה")
      })
  }

//   toEmbed(){
//     console.log("שיבוץ")
//     this.Assisted.toEmbedAssisted().subscribe(res=>{
//       if(res)
//       console.log("שבוץ")
//     });
//   }
//   ngOnDestroy() {
//     this.subscription.unsubscribe();
//   }
}
