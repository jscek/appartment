import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EditProfileComponent} from '../profile-page/edit-profile/edit-profile.component'
import {NotePopupComponent} from '../profile-page/note-popup/note-popup.component'
import {UserStructure} from 'src/app/models/userStructures'
import {NoteStructure} from 'src/app/models/noteStructures'
import {NotesService} from 'src/app/services/notes.service'
import {ProfileService} from 'src/app/services/profile.service'
import {FlatsService} from 'src/app/services/flats.service'

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

  userData: UserStructure = {
    id: 1,
    email: "",
    name: "",
    avatar: null,
    score: 0
  };

  flat = null;

  constructor(public dialog: MatDialog, 
              private flatsService: FlatsService,
              private profileService: ProfileService,
              private notesService: NotesService) { }

  ngOnInit(): void {
    this.profileService.currentUserData.subscribe(
      (user) => {
        if(!user) {
          return
        }
        this.userData= user;
        this.imgData = this.userData.avatar;
        if (this.imgData == null) {
          this.imgData = this.defaultImgPath;
        }
      }
    );
    this.flatsService.currentFlat.subscribe(
      (flat) => {
        if (!flat) {
          return
        }
        this.flat = flat;
        this.flatUsers = flat.users;
      });
    this.notesService.currentNotes.subscribe((notes) => (this.flatNotes = notes));

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
          this.profileService.updateName(this.userData.id,result.name)
        }
        if (result.avatar != "") {
          this.profileService.updateAvatar(this.userData.id,result.avatar)
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
            this.notesService.create(result.data.title, result.data.description)
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
            this.notesService.update(result.data.id, result.data.title, result.data.description);
          } else if (result.action == "DELETE") {
            this.notesService.delete(result.data.id);
          }
        }
      });
    }
  }

}
