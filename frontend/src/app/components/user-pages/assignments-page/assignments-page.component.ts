import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-assignments-page',
  templateUrl: './assignments-page.component.html',
  styleUrls: ['./assignments-page.component.css']
})
export class AssignmentsPageComponent implements OnInit {

  choosenDate: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.choosenDate = event.value.toString();
  }

}
