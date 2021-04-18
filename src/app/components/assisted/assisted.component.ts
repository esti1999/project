import { Component, OnInit } from '@angular/core';
import { AssistedService } from 'src/app/services/assisted.service'; 
import { Assisted } from '../../classes/assisted';
import { PersonalStatus } from '../../classes/personal-status';
import { Gender } from '../../classes/gender';
import { Language } from 'src/app/classes/language';
import { City } from 'src/app/classes/city';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assisted',
  templateUrl: './assisted.component.html',
  styleUrls: ['./assisted.component.css']
})
export class AssistedComponent implements OnInit {
  // newAssisted: Assisted = new Assisted();
  constructor(public Assisted:AssistedService ,private route:ActivatedRoute) { }

  mode:string

 list:PersonalStatus[]
 newPersonalStatus: PersonalStatus = new PersonalStatus();

 list1:Gender[]
 newGender: Gender = new Gender();

 list2:Language[]
 newLanguage: Language = new Language();

 list3:City[]
 newCity: City = new City();
 
  ngOnInit(){

    this.mode=this.route.snapshot.params['mode']


    this.Assisted.getPersonalStatus().subscribe(data=>{
      this.list = data;
    })
    this.Assisted.getGender().subscribe(data=>{
      this.list1 = data;
    })
    this.Assisted.getLanguage().subscribe(data=>{
      this.list2 = data;
    })
    this.Assisted.getCity().subscribe(data=>{
      this.list3 = data;
    })
  }
  add(){
    this.Assisted.add().subscribe(data=>{this.Assisted.listAssisted = data
    alert("הרשמתך בוצעה בהצלחה")})
    // this.Assisted.Assisted = new Assisted();
    // this.Assisted.gender = new Gender();
    // this.Assisted.personalStatus = new PersonalStatus();
    // this.Assisted.language = new <Language>();
    // this.Assisted.city = new City();
  }
}
