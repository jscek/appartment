import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-joining-popup',
  templateUrl: './joining-popup.component.html',
  styleUrls: ['./joining-popup.component.css']
})
export class JoiningPopupComponent implements OnInit {

  testTempCode: string = "www3#t";

  status: boolean;
  statusText: string = "";
  flatCode: string = "";

  constructor(public dialogRef: MatDialogRef<JoiningPopupComponent>) { }

  ngOnInit(): void {
  }

  tryToJoin(): void {
    if (this.flatCode == this.testTempCode) {
      this.status =  true;
      this.statusText = "Joining successfuly!";
    } else {
      this.status = false;
      this.statusText = "Failed flat code!";
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
