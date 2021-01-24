import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FlatsService } from 'src/app/services/flats.service';

@Component({
  selector: 'app-creating-popup',
  templateUrl: './creating-popup.component.html',
  styleUrls: ['./creating-popup.component.css'],
})
export class CreatingPopupComponent implements OnInit {
  flatName: string = '';

  constructor(
    private flatsService: FlatsService,
    public dialogRef: MatDialogRef<CreatingPopupComponent>,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createFlat(): void {
    this.flatsService.create(this.flatName).subscribe((flat) => {
      this._snackBar.open(`Flat ${this.flatName} created!`, 'Close', {
        duration: 3000,
      });
      this.closePopup();
    });
  }

  closePopup(): void {
    this.dialogRef.close();
  }
}
