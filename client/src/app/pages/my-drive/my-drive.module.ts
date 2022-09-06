import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbDialogModule } from '@nebular/theme';

import { MyDriveRoutingModule } from 'src/app/pages/my-drive/my-drive-routing.module';
import { MyDriveComponent } from 'src/app/pages/my-drive/my-drive.component'
import { SharedModule } from 'src/app/shared_modules/shared.module';
import { FileManagerService } from 'src/app/services/file-manager.service';
import { FileExplorerModule } from 'src/app/components/file-manager/file-explorer/file-explorer.module';
<<<<<<< HEAD
import { FileUploadComponent } from 'src/app/components/file-manager/file-upload/file-upload.component';
import { FileSizePipe } from 'src/app/components/file-manager/file-upload/file-size';
=======
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3


@NgModule({
  declarations: [
    MyDriveComponent,
<<<<<<< HEAD
    FileUploadComponent,
    FileSizePipe
=======
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3
  ],
  imports: [
    CommonModule,
    MyDriveRoutingModule,
    SharedModule,
    NbDialogModule.forChild(),
    FileExplorerModule
  ],
  providers:[
    FileManagerService,
  ]
})
export class MyDriveModule { }
