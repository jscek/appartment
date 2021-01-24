import { Component, ViewChild, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {MatDatepicker} from '@angular/material/datepicker';

@Component({
  selector: 'app-assignments-page',
  templateUrl: './assignments-page.component.html',
  styleUrls: ['./assignments-page.component.css']
})
export class AssignmentsPageComponent implements OnInit {

  @ViewChild('picker') datePickerElement: MatDatepicker<any>;
  choosenDate: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  addEvent(event: MatDatepickerInputEvent<Date>) {
    console.log(event);
    // this.datePickerElement.select(event);
    this.datePickerElement.close();
  }

}
