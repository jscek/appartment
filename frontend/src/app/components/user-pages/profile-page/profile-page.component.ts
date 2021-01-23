import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EditProfileComponent} from '../profile-page/edit-profile/edit-profile.component'
import {NotePopupComponent} from '../profile-page/note-popup/note-popup.component'
import {UserStructure} from 'src/app/models/userStructures'
import {NoteStructure} from 'src/app/models/noteStructures'

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  private defaultImgPath: string = "../../../assets/default_avatar.png";
  private imgData: string = null;
  
  flatUsers: UserStructure[] = [];
  flatNotes: NoteStructure[] = [];

  userData: UserStructure;

  u1: UserStructure = {
    id: 1,
    email: "jankos1195@gmail.com",
    name: "Jaca Praca",
    avatar: null,
    score: 300
  }

  u2: UserStructure = {
    id: 1,
    email: "jankos1195@gmail.com",
    name: "Matiax Połeć",
    avatar: null,
    score: 200
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

    this.userData = {
      id: 1,
      email: "jankos1195@gmail.com",
      name: "Janek",
      avatar: null,
      score: 1500
    };

    this.imgData = this.userData.avatar;
    if (this.imgData == null) {
      this.imgData = this.defaultImgPath;
    }

    this.flatUsers.push(this.u1,this.u2);
  }

  getImg(): string {
    return this.imgData;
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      data: {name: this.userData.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        if (result.name != this.userData.name) {
          this.userData.name = result.name;
        }
        if (result.avatar != "") {
          this.userData.avatar = result.avatar;
          this.imgData = result.avatar;
          // TODO: UPDATE USER IN DATABASE
        }
      }
    });
  }

  openNoteDialog(editNote: NoteStructure = null): void {
    if (editNote == null) {
      const dialogRef = this.dialog.open(NotePopupComponent, {
        data: {id: editNote}
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result != null) {
          if (result.action == "SAVE") {
            let newNote: NoteStructure = {
              id: 10,
              title: result.data.title,
              description: result.data.description,
              created_at: "2021-01-21",
              user_name: this.userData.name
            };
            this.flatNotes.push(newNote);
          }
        }
      });
    } else {
      const dialogRef = this.dialog.open(NotePopupComponent, {
        data: {id: editNote.id, title: editNote.title, description: editNote.description}
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result != null) {
          if (result.action == "SAVE") {
            let idx = this.flatNotes.findIndex(obj => obj.id == result.data.id);
            this.flatNotes[idx].title = result.data.title;
            this.flatNotes[idx].description = result.data.description;
          } else if (result.action == "DELETE") {
            this.flatNotes = this.flatNotes.filter(obj => obj.id != result.data.id);
          }
        }
      });
    }
  }

}
