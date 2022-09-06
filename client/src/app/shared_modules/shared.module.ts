import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbContextMenuModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbProgressBarModule, NbRouteTabsetModule, NbSidebarModule, NbTabsetModule, NbTreeGridModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
=======
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3
@NgModule({
  declarations: [
  ],

  imports: [
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbTreeGridModule,
    NbIconModule,
    NbButtonModule,
    NbContextMenuModule,
    NbInputModule,
    NbSidebarModule,
    NbFormFieldModule,
    FormsModule,
    NbProgressBarModule,
<<<<<<< HEAD
    MatMenuModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule
=======

>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3
  ],

  exports: [
    NbLayoutModule,
    NbCardModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbTreeGridModule,
    NbIconModule,
    NbButtonModule,
    NbContextMenuModule,
    NbInputModule,
    NbSidebarModule,
    NbFormFieldModule,
    FormsModule,
    NbProgressBarModule,
<<<<<<< HEAD
    MatMenuModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule
=======
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3
  ],
})
export class SharedModule { }