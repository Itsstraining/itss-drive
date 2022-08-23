import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbContextMenuModule, NbIconModule, NbInputModule, NbLayoutModule, NbRouteTabsetModule, NbTabsetModule, NbTreeGridModule } from '@nebular/theme';



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
  ],
})
export class SharedModule { }