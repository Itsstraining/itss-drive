import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
<<<<<<< HEAD
import { FileExplorerModule } from 'src/app/components/file-manager/file-explorer/file-explorer.module';
import { SharedModule } from 'src/app/shared_modules/shared.module';
=======
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3


@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD
    FavoritesRoutingModule,
    FileExplorerModule,
    SharedModule
=======
    FavoritesRoutingModule
>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3
  ]
})
export class FavoritesModule { }
