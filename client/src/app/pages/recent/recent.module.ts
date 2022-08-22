import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecentRoutingModule } from './recent-routing.module';
import { RecentComponent } from './recent.component';


@NgModule({
  declarations: [
    RecentComponent
  ],
  imports: [
    CommonModule,
    RecentRoutingModule
  ]
})
export class RecentModule { }
