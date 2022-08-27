import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbContextMenuModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbProgressBarModule, NbRouteTabsetModule, NbSidebarModule, NbTabsetModule, NbTreeGridModule } from '@nebular/theme';

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
  ],
})
export class SharedModule { }