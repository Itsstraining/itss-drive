import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';

import { SharedModule } from 'src/app/shared_modules/shared.module';
import { MyDriveModule } from '../my-drive/my-drive.module';
import { FileManagerService } from 'src/app/services/file-manager.service';
import { NbCardBodyComponent } from '@nebular/theme';




@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    SidebarComponent,
    
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MyDriveModule,
    SharedModule,
  ],
  providers:[
    FileManagerService,
  ]
})
export class MainModule { }
