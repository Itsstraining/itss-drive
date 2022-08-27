import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbDialogModule } from '@nebular/theme';

import { MyDriveRoutingModule } from 'src/app/pages/my-drive/my-drive-routing.module';
import { MyDriveComponent } from 'src/app/pages/my-drive/my-drive.component'
import { SharedModule } from 'src/app/shared_modules/shared.module';
import { FileManagerService } from 'src/app/services/file-manager.service';
import { FileExplorerModule } from 'src/app/components/file-manager/file-explorer/file-explorer.module';


@NgModule({
  declarations: [
    MyDriveComponent,
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
