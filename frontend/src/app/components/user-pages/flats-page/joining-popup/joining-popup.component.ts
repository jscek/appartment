import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FlatsService } from 'src/app/services/flats.service';

@Component({
  selector: 'app-joining-popup',
  templateUrl: './joining-popup.component.html',
  styleUrls: ['./joining-popup.component.css'],
})
export class JoiningPopupComponent implements OnInit {
  status: boolean;
  statusText: string = '';
  flatCode: string = '';

  constructor(
    private flatsService: FlatsService,
    public dialogRef: MatDialogRef<JoiningPopupComponent>
  ) {}

  ngOnInit(): void {}

  tryToJoin(): void {
    this.flatsService.join(this.flatCode).subscribe(
      (flat) => {
        this.statusText = '';
        this.dialogRef.close();
      },
      (err) => {
        this.statusText = 'Invalid flat code!';
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
