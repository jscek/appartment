import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  @ViewChild('uploadFile') myInputFileVariable: ElementRef;
  private maxImgBytes: number = 1048487;

  img: string = "";
  fileStatusTag: string = "NONE"; 
  fileStatus: string = "";

  constructor(public dialogRef: MatDialogRef<EditProfileComponent>) { }

  ngOnInit(): void {
  }

  onSelectFile(event) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        let imgValue = reader.result as string;
        this.myInputFileVariable.nativeElement.value = "";
        const byteSize = new Blob([imgValue]).size;
        if (byteSize > this.maxImgBytes) {
          this.img = null;
          this.fileStatus = "File upload has failed! The file can't be larger than 1MB."
          this.fileStatusTag = "FAIL"
        } else {
          this.img = imgValue; 
          this.fileStatus = "File transfer was successful!"
          this.fileStatusTag = "DONE"
        }
      };
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
