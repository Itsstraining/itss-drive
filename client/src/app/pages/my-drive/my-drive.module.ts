import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbDialogModule } from '@nebular/theme';

import { MyDriveRoutingModule } from 'src/app/pages/my-drive/my-drive-routing.module';
import { MyDriveComponent } from 'src/app/pages/my-drive/my-drive.component'
import { SharedModule } from 'src/app/shared_modules/shared.module';
import { RenameFolderDialogComponent } from '../../components/file-manager/modals/rename-folder-dialog/rename-folder-dialog.component';
import { CreateFolderDialogComponent } from '../../components/file-manager/modals/create-folder-dialog/create-folder-dialog.component';


@NgModule({
  declarations: [
    MyDriveComponent,
    CreateFolderDialogComponent,
    RenameFolderDialogComponent
  ],
  imports: [
    CommonModule,
    MyDriveRoutingModule,
    SharedModule,
    NbDialogModule.forChild(),
  ],

  exports: [MyDriveComponent],

  entryComponents: [CreateFolderDialogComponent, RenameFolderDialogComponent]
})
export class MyDriveModule { }
