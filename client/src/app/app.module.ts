import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NbThemeModule, NbMenuModule, NbDialogModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SharedModule } from './shared_modules/shared.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
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
    NbThemeModule.forRoot({ name: 'default' }),
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot(),
    SharedModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
