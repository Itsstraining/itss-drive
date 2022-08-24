import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';

import { NbThemeModule, NbMenuModule, NbDialogModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SharedModule } from './shared_modules/shared.module';
import { CreateFolderDialogComponent } from './components/file-manager/modals/create-folder-dialog/create-folder-dialog.component';
import { RenameFolderDialogComponent } from './components/file-manager/modals/rename-folder-dialog/rename-folder-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot(),
    SharedModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
