import { Component, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-create-folder-dialog',
  templateUrl: './create-folder-dialog.component.html',
  styleUrls: ['./create-folder-dialog.component.scss']
})
export class CreateFolderDialogComponent{

  folderNames: string[] = [];
  constructor(private dialogService: NbDialogService) {
  }

  openDialog(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }

  open() {
    this.dialogService.open(CreateFolderDialogComponent)
      .onClose.subscribe(folderNames => folderNames && this.folderNames.push(folderNames));
  }
}

