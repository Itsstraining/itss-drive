import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrashRoutingModule } from './trash-routing.module';
import { TrashComponent } from './trash.component';
import { SharedModule } from 'src/app/shared_modules/shared.module';


@NgModule({
  declarations: [
    TrashComponent
  ],
  imports: [
    CommonModule,
    TrashRoutingModule,
    SharedModule,
  ]
})
export class TrashModule { }
