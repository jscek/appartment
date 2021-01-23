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

  n1: NoteStructure = {
    id: 1,
    title: "Kuchnia",
    description: "Kurwa mać jak zwykle jebany pierdolnik",
    created_at: "2021-01-21",
    user_name: "Janek"
  }

  n2: NoteStructure = {
    id: 1,
    title: "Sprzątanie",
    description: "Chłopaczki w tym tyg posprzątamy??",
    created_at: "2021-01-21",
    user_name: "Matiax Połeć"
  }

  n3: NoteStructure = {
    id: 1,
    title: "O Wy kurła",
    description: "tldr",
    created_at: "2021-01-21",
    user_name: "Jaca Praca"
  }

  n4: NoteStructure = {
    id: 1,
    title: "LOL!",
    description: "Wow chopaczki ale wam opowiem jazka taka że ja jebe, posłuchajcie tego... ",
    created_at: "2021-01-21",
    user_name: "Janek"
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
    this.flatNotes.push(this.n1,this.n2,this.n3,this.n4,this.n2,this.n3,this.n4);
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
        }
      }
    });
  }

  openNoteDialog(): void {
    const dialogRef = this.dialog.open(NotePopupComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
