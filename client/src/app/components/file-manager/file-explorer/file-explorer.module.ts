import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbDialogModule } from '@nebular/theme';

import { FileExplorerComponent } from './file-explorer.component';
import { SharedModule } from 'src/app/shared_modules/shared.module';
import { RenameFolderDialogComponent } from '../modals/rename-folder-dialog/rename-folder-dialog.component';
import { CreateFolderDialogComponent } from '../modals/create-folder-dialog/create-folder-dialog.component';
import { StringLimitPipe } from 'src/app/pipes/limitTo.pipe';



@NgModule({
  declarations: [
    FileExplorerComponent,
    CreateFolderDialogComponent,
    RenameFolderDialogComponent,
    StringLimitPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    NbDialogModule.forChild(),
  ],
  providers: [
    StringLimitPipe,
  ],
  exports: [FileExplorerComponent],

  entryComponents: [CreateFolderDialogComponent, RenameFolderDialogComponent]
})
export class FileExplorerModule { }
