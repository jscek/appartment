import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FlatStructure } from 'src/app/models/flatStructure';
import { FlatsService } from 'src/app/services/flats.service';
import { CreatingPopupComponent } from './creating-popup/creating-popup.component';
import { JoiningPopupComponent } from './joining-popup/joining-popup.component';

@Component({
  selector: 'app-flats-page',
  templateUrl: './flats-page.component.html',
  styleUrls: ['./flats-page.component.css'],
})
export class FlatsPageComponent implements OnInit {
  flat: FlatStructure = null;

  constructor(public dialog: MatDialog, private flatsService: FlatsService) {}

  ngOnInit(): void {
    this.flatsService.currentFlat.subscribe((flat) => (this.flat = flat));
  }

  flatExists(): boolean {
    if (this.flat) {
      return true;
    }

    return false;
  }

  flatMembers(): string[] {
    if (this.flat) {
      return this.flat.users.map((user) => user.name);
    }

    return [];
  }

  openJoiningDialog(): void {
    const dialogRef = this.dialog.open(JoiningPopupComponent, {});
  }

  openCreatingDialog(): void {
    const dialogRef = this.dialog.open(CreatingPopupComponent, {});
  }

  leaveFlat(): void {}
}
