import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import { FileExplorerModule } from 'src/app/components/file-manager/file-explorer/file-explorer.module';
import { SharedModule } from 'src/app/shared_modules/shared.module';


@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    FileExplorerModule,
    SharedModule
  ]
})
export class FavoritesModule { }
