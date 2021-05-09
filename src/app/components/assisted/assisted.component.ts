import { Component, OnInit } from '@angular/core';
import { AssistedService } from 'src/app/services/assisted.service'; 
import { Assisted } from '../../classes/assisted';
import { PersonalStatus } from '../../classes/personal-status';
import { Gender } from '../../classes/gender';
import { Language } from 'src/app/classes/language';
import { Days } from 'src/app/classes/days';
import { Shifts } from 'src/app/classes/shifts';
import { City } from 'src/app/classes/city';
import { Subscription , interval} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Availability } from 'src/app/classes/availability';


@Component({
  selector: 'app-assisted',
  templateUrl: './assisted.component.html',
  styleUrls: ['./assisted.component.css']
})
export class AssistedComponent implements OnInit {
  // newAssisted: Assisted = new Assisted();
  constructor(public Assisted:AssistedService ,private route:ActivatedRoute, private rout:Router) { }

  mode:string;
 

 list:PersonalStatus[]

 subscription: Subscription;
 newPersonalStatus: PersonalStatus = new PersonalStatus();

 list1:Gender[]
 newGender: Gender = new Gender();

 list2:Language[]
 newLanguage: Language = new Language();

 list3:City[]
 newCity: City = new City();

 list4: Days[]
 newDays: Days = new Days();
 
 list5: Shifts[]
 newShift: Shifts = new Shifts();

 password2: string="";

 availabilitys: Availability[];

 
  ngOnInit()
  {

    this.mode=this.route.snapshot.params['mode']
    this.password2=this.Assisted.Assisted.password;


    this.Assisted.getPersonalStatus().subscribe(data=>{
      this.list = data;
    })
    this.Assisted.getGender().subscribe(data=>{
      this.list1 = data;
    })
    this.Assisted.getLanguage().subscribe(data=>{
      // this.list2 = data;
      if(this.Assisted.Assisted.languages.length==0){
        this.Assisted.Assisted.languages=data;
      }
    })
    this.Assisted.getCity().subscribe(data=>{
      this.list3 = data;
    })
    this.Assisted.getDays().subscribe(data=>{
      this.list4 = data;
    })
    this.Assisted.getShift().subscribe(data=>{
      this.list5 = data;
    })
    this.Assisted.getAvailabilitys().subscribe(data => {
      if (this.Assisted.Assisted.availabilitys.length == 0) {
        this.Assisted.Assisted.availabilitys = data;
      }
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

  add()
  {
    this.Assisted.addAssisted().subscribe(data=>{
      // this.Assisted.listAssisted = data
      if(data == true){
            alert("הרשמתך בוצעה בהצלחה")
            // this.rout.navigate(['/schedule/assisted']);
            // const source = interval(10000*6);
            // const text = 'Your Text Here';
            // this.subscription = source.subscribe(val => this.toEmbed());
          }
      else
            alert("הרשמתך נכשלה")
      })
      
  }
  add1()
  {
    this.Assisted.addAssisted().subscribe(data=>{
      // this.Assisted.listAssisted = data
      if(this.mode == 'update'){
        if(data==true)
        {
          alert("העדכון בוצע בהצלחה")
          // const source = interval(10000*6);
          // const text = 'Your Text Here';
          // this.subscription = source.subscribe(val => this.toEmbed());
        }
         
          }
      else
            alert("הרשמתך נכשלה")
            // this.rout.navigate(['/schedule/assisted']);
      })
      
  }
  // toEmbed()
  // {
  //   console.log("שיבוץ")
  //   this.Assisted.toEmbedAssisted().subscribe(res=>{
  //     if(res)
  //     console.log("שבוץ")
  //   });
  // }
  navigateSchedule()
  {
    this.rout.navigate(['/schedule/assisted']);
  }
}
