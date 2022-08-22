import { Component, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-rename-folder-dialog',
  templateUrl: './rename-folder-dialog.component.html',
  styleUrls: ['./rename-folder-dialog.component.scss']
})
export class RenameFolderDialogComponent{

  names: string[] = [];
  constructor(private dialogService: NbDialogService) {
  }

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }
}
