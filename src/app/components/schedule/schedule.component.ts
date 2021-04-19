import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  userType:string;

  constructor( private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userType=this.route.snapshot.params['userType']
  }

}
