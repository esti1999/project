import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assisted } from 'src/app/classes/assisted';
import { AssistedService } from 'src/app/services/assisted.service';
import { VolunteerService } from 'src/app/services/volunteer.service';
import { ApiService } from 'src/app/services/api.service';
import { Volunteer } from 'src/app/classes/volunteer';
import { NgForOf } from '@angular/common';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  password: string
  e_mail: string
  user: any

  isSuccess:boolean=false;
  popup:string;

  // constructor(public ApiService:ApiService ,public rout:Router, public VolunteerApi:VolunteerService) { }

  constructor(
    public ApiService: ApiService,
    public rout: Router,
    public volunteerService: VolunteerService,
    public assistedService: AssistedService
  ) { }

  ngOnInit() {

  }

  Enters() {
    this.ApiService.GetEailAddressAndPassword(this.e_mail, this.password)
      .subscribe(async data => {
        if (data != null) {
          this.isSuccess=true;
           this.popup="ברוך הבא"
          await new Promise((resolve=>setTimeout(resolve,3000)))
           this.isSuccess=false;
          //  alert("ברוך הבא");
          //save valonteer in service
          this.volunteerService.Volunteer = data;
          this.volunteerService.Volunteer.date_of_birth = new Date(data.date_of_birth);
          this.assistedService.getEmbededAssisteds(this.volunteerService.Volunteer).subscribe(data => {
            this.volunteerService.embedAssistedsList = data.filter(e=>e.isApproved==false);
            this.volunteerService.approvedEmbedAssistedsList = data.filter(e=>e.isApproved==true);
            this.rout.navigate(['/schedule/volunteer']);
          })
        }
        else {
          this.ApiService.GetEailAddressAndPassword1(this.e_mail, this.password)
            .subscribe(async data1 => {
              if (data1 != null) {
                this.isSuccess=true;
                this.popup="ברוך הבא"
               await new Promise((resolve=>setTimeout(resolve,3000)))
                this.isSuccess=false;
                this.rout.navigate(['/schedule/assisted']);
                console.log("assisted", data1)
                //save assisted
                this.assistedService.Assisted = data1;
                this.assistedService.Assisted.date_birth = new Date(data1.date_birth);
              }
              else {
                this.isSuccess=true;
                this.popup="משתמש לא קיים במערכת"
               await new Promise((resolve=>setTimeout(resolve,3000)))
                this.isSuccess=false;
              }
            }, async err => {       
               this.isSuccess=true;
              this.popup="שגיאה בגישה לשרת "
             await new Promise((resolve=>setTimeout(resolve,3000)))
              this.isSuccess=false; })
        }
      }, async err => {     
        this.isSuccess=true;
        this.popup="שגיאה בגישה לשרת "
       await new Promise((resolve=>setTimeout(resolve,3000)))
        this.isSuccess=false; }) 
  }
}


        // for (Assisted.prototype.password && Assisted.prototype.e_mail)
    // {
    //   for(Volunteer.prototype.password && Volunteer.prototype.e_mail)
    //   {
    //     if((password && e_mail) == Assisted.prototype )
    //     return this.Enter();
    //     else
    //       if((password && e_mail) == Volunteer.prototype)
    //       return this.Enter1();
    //       // else  
    //   }
    // }
  // Enter()
  // {

  //     else{

  //       this.rout.navigate(['/assisted']);
  //       this.ApiService.newAssisted = new Assisted;
  //     }

  //   },err=>{alert("שגיאה בגישה לשרת")})
  // }

  // Enter1()
  // {

  //     else{
  //       alert("משתמש לא קיים במערכת");
  //       this.rout.navigate(['/volunteer']);
  //       this.ApiService.newVolunteer = new Volunteer;
  //     }

  //   },err=>{alert("שגיאה בגישה לשרת")})
  // }
