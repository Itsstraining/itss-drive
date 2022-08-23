import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InroRoutingModule } from './inro-routing.module';
import { InroComponent } from './inro.component';


@NgModule({
  declarations: [
    InroComponent
  ],
  imports: [
    CommonModule,
    InroRoutingModule
  ]
})
export class InroModule { }
