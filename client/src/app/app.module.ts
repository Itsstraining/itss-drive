import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

<<<<<<< HEAD
import { NbThemeModule, NbMenuModule, NbDialogModule, NbLayoutModule, NbSidebarModule, NbToastrModule } from '@nebular/theme';
=======

import { NbThemeModule, NbMenuModule, NbDialogModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SharedModule } from './shared_modules/shared.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
<<<<<<< HEAD
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';




=======
import { CreateFolderDialogComponent } from './components/file-manager/modals/create-folder-dialog/create-folder-dialog.component';
import { RenameFolderDialogComponent } from './components/file-manager/modals/rename-folder-dialog/rename-folder-dialog.component';
import { FormsModule } from '@angular/forms';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';


>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3
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
<<<<<<< HEAD
    NbToastrModule.forRoot(),
=======
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3
    SharedModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
<<<<<<< HEAD
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    provideMessaging(() => getMessaging()),
=======
    FormsModule
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
