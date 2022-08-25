import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';

import { SharedModule } from 'src/app/shared_modules/shared.module';
import { NbCardBodyComponent } from '@nebular/theme';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';




@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    SidebarComponent,
    
    
    
  ],
  imports: [
    CommonModule,
    MainRoutingModule,

    MatSidenavModule,

    SharedModule,

  ]
})
export class MainModule { }
