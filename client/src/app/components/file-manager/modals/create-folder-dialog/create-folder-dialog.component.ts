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

<<<<<<< HEAD
  close(){
    this.dialogRef.close();
    console.log(this.folderName);
  }

  submit(){
    this.dialogRef.close(this.folderName);
    console.log(this.folderName);
  }


=======
  openDialog(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }

  close(){
    this.dialogRef.close();
  }

  // open() {
  //   this.dialogService.open(CreateFolderDialogComponent)
  //     .onClose.subscribe(folderNames => folderNames && this.folderName.push(folderName));
  // }
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3
}

