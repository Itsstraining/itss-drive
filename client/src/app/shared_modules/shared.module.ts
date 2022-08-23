import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbContextMenuModule, NbIconModule, NbInputModule, NbLayoutModule, NbRouteTabsetModule, NbSidebarModule, NbTabsetModule, NbTreeGridModule } from '@nebular/theme';



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
  ],
})
export class SharedModule { }