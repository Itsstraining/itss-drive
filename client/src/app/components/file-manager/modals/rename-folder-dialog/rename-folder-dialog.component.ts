import { Component, TemplateRef } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-rename-folder-dialog',
  templateUrl: './rename-folder-dialog.component.html',
  styleUrls: ['./rename-folder-dialog.component.scss']
})
export class RenameFolderDialogComponent{

  folderName: string;
  constructor(private dialogService: NbDialogService, public dialogRef: NbDialogRef<RenameFolderDialogComponent>) {
  }

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }
}
