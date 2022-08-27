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
}

