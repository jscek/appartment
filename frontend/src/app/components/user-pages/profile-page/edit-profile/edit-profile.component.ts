import { Component, ViewChild, ElementRef, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EditUserStructure} from 'src/app/models/userStructures'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  @ViewChild('uploadFile') myInputFileVariable: ElementRef;
  private maxImgBytes: number = 1048487;

  fileStatusTag: string = "NONE"; 
  fileStatus: string = "";
  editUserValues: EditUserStructure;

  constructor(
    public dialogRef: MatDialogRef<EditProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public userData: any) { }

  ngOnInit(): void {
    this.editUserValues = {
      name: this.userData.name,
      avatar: ""
    };
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
          this.editUserValues.avatar = "";
          this.fileStatus = "File upload has failed! The file can't be larger than 1MB."
          this.fileStatusTag = "FAIL"
        } else {
          this.editUserValues.avatar = imgValue;
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
