import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { EmbeddingAssisted } from 'src/app/classes/embeddingAssisted';
import { Availability } from 'src/app/classes/availability';
import { Days } from 'src/app/classes/days';
import { Shifts } from 'src/app/classes/shifts';
import { AssistedService } from 'src/app/services/assisted.service';
import { VolunteerService } from 'src/app/services/volunteer.service';

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
  isSuccess:boolean=false;
  popup:string;
  availabilitys: Availability[];
  assistedsList: EmbeddingAssisted[] = [];
  subscription: Subscription;
  constructor(private route: ActivatedRoute, public Assisted: AssistedService, private router: Router, private volunteer: VolunteerService) {
  }

  ngOnInit(): void {
    debugger
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
    if (this.Assisted.Assisted.availabilitys != undefined) {
      if (event.target.checked) {
        this.Assisted.Assisted.availabilitys.find(a => a.code_day == code_day && a.code_shift == code_shift).IsSelected = true;
      }
      else
        this.Assisted.Assisted.availabilitys.find(a => a.code_day == code_day && a.code_shift == code_shift).IsSelected = false;
    }
  }
  add() {
    this.Assisted.addAssisted().subscribe(async data => {
      // this.Assisted.listAssisted = data
      if (data == true) {
        this.isSuccess=true;
        this.popup="פניתך התקבלה בהצלחה"
        await new Promise((resolve=>setTimeout(resolve,3000)))
         this.isSuccess=false;
      }
      else
      this.isSuccess=true;
      this.popup="פניתך נכשלה"
      await new Promise((resolve=>setTimeout(resolve,3000)))
       this.isSuccess=false;
    })
  }
  toEmbed() {
    console.log("שיבוץ")
  }
  approveEmbedding(embeddingAssisted: EmbeddingAssisted) {
    embeddingAssisted.isApproved = !embeddingAssisted.isApproved;
    
  }
  sendMessages() {
    let approvedEmbeddings: EmbeddingAssisted[] = this.volunteer.embedAssistedsList.filter(a => a.isApproved == true);
    this.Assisted.sendMessagesToAssisteds(approvedEmbeddings).subscribe(async res => {
      // if (res) {
        approvedEmbeddings.forEach(e => this.volunteer.approvedEmbedAssistedsList.push(e));
        this.volunteer.embedAssistedsList = this.volunteer.embedAssistedsList.filter(a => a.isApproved == false);
        this.isSuccess=true;
        this.popup="השיבוץ בוצע בהצלחה"
        await new Promise((resolve=>setTimeout(resolve,3000)))
         this.isSuccess=false;
      // }
    });
  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}