import { Component, TemplateRef } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-create-folder-dialog',
  templateUrl: './create-folder-dialog.component.html',
  styleUrls: ['./create-folder-dialog.component.scss']
})
export class CreateFolderDialogComponent{

  folderName: string;
  constructor(
    private dialogService: NbDialogService,
    public dialogRef: NbDialogRef<CreateFolderDialogComponent>) {
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

