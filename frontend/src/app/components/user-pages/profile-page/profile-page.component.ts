import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {EditProfileComponent} from '../profile-page/edit-profile/edit-profile.component'

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  img_file: string = "https://scontent-waw1-1.xx.fbcdn.net/v/t31.0-8/30420102_1788124121266457_3171397161646616647_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=Se8wCydwv4QAX8KDyJf&_nc_ht=scontent-waw1-1.xx&oh=c5c1df13f3cb6198cb6037cbb96eac26&oe=602ADB04"

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditProfileComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
