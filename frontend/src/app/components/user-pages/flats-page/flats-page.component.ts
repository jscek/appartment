import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flats-page',
  templateUrl: './flats-page.component.html',
  styleUrls: ['./flats-page.component.css']
})
export class FlatsPageComponent implements OnInit {

  flatCode: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  flatCodeExists(): boolean {
    if (this.flatCode == "") {
      return false;
    } 
    return true;
  }

  leaveFlat(): void {

  }

}