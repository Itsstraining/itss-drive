import { Component, TemplateRef } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-rename-folder-dialog',
  templateUrl: './rename-folder-dialog.component.html',
  styleUrls: ['./rename-folder-dialog.component.scss']
})
export class RenameFolderDialogComponent{

  folderName: string;
  constructor(public dialogRef: MatDialogRef<RenameFolderDialogComponent>) {
  }
  close(){
    this.dialogRef.close();
    console.log(this.folderName);
  }

  submit(){
    this.dialogRef.close(this.folderName);
    console.log(this.folderName);
  }
}
