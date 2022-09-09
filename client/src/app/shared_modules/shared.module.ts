import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbContextMenuModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbPopoverModule, NbProgressBarModule, NbRouteTabsetModule, NbSidebarModule, NbTabsetModule, NbTooltipModule, NbTreeGridModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
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
    MatMenuModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NbPopoverModule,
    NbTooltipModule,
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
    MatMenuModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NbPopoverModule,
    NbTooltipModule,
  ],
})
export class SharedModule { }