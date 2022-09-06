import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InroComponent } from './inro.component';

const routes: Routes = [{ path: '', component: InroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InroRoutingModule { }
