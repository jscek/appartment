import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditnoteStructure } from 'src/app/models/noteStructures'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-note-popup',
  templateUrl: './note-popup.component.html',
  styleUrls: ['./note-popup.component.css']
})
export class NotePopupComponent implements OnInit {

  @ViewChild('noteSaver') noteSaverButton: ElementRef;
  editNoteValues: EditnoteStructure;

  constructor(public dialogRef: MatDialogRef<NotePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (this.editData == null) {
      this.editNoteValues = {
        id: null,
        title: null,
        description: null
      }
    } else {
      this.editNoteValues = {
        id: this.editData.id,
        title: this.editData.title,
        description: this.editData.description
      }
    }
  }

  saveNote(): void {
    if (this.editNoteValues.title == null || this.editNoteValues.title == "" || this.editNoteValues.description == null || this.editNoteValues.description == "") {
      this._snackBar.open('Title or description is empty!', 'Close',{
        duration: 3000,
      });
    } else {
      this.noteSaverButton.nativeElement.click();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
