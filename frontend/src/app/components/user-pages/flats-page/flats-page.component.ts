import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {JoiningPopupComponent} from '../flats-page/joining-popup/joining-popup.component'

@Component({
  selector: 'app-flats-page',
  templateUrl: './flats-page.component.html',
  styleUrls: ['./flats-page.component.css']
})
export class FlatsPageComponent implements OnInit {

  flatCode: string = "";

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  flatCodeExists(): boolean {
    if (this.flatCode == "") {
      return false;
    } 
    return true;
  }

  openJoiningDialog(): void {
    const dialogRef = this.dialog.open(JoiningPopupComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  leaveFlat(): void {

  }

}