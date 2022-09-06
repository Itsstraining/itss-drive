import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbDialogModule } from '@nebular/theme';

<<<<<<< HEAD

=======
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3
import { FileExplorerComponent } from './file-explorer.component';
import { SharedModule } from 'src/app/shared_modules/shared.module';
import { RenameFolderDialogComponent } from '../modals/rename-folder-dialog/rename-folder-dialog.component';
import { CreateFolderDialogComponent } from '../modals/create-folder-dialog/create-folder-dialog.component';


@NgModule({
  declarations: [
    FileExplorerComponent,
    CreateFolderDialogComponent,
    RenameFolderDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NbDialogModule.forChild(),
  ],

  exports: [FileExplorerComponent],

  entryComponents: [CreateFolderDialogComponent, RenameFolderDialogComponent]
})
export class FileExplorerModule { }
