import { Component, TemplateRef } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
<<<<<<< HEAD
import { MatDialogRef } from '@angular/material/dialog';
=======
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3

@Component({
  selector: 'app-rename-folder-dialog',
  templateUrl: './rename-folder-dialog.component.html',
  styleUrls: ['./rename-folder-dialog.component.scss']
})
export class RenameFolderDialogComponent{

  folderName: string;
<<<<<<< HEAD
  constructor(public dialogRef: MatDialogRef<RenameFolderDialogComponent>) {
  }
  close(){
    this.dialogRef.close();
    console.log(this.folderName);
  }

  submit(){
    this.dialogRef.close(this.folderName);
    console.log(this.folderName);
=======
  constructor(private dialogService: NbDialogService, public dialogRef: NbDialogRef<RenameFolderDialogComponent>) {
  }

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3
  }
}
