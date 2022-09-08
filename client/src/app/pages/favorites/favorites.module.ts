import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import { SharedModule } from 'src/app/shared_modules/shared.module';
import { NbDialogModule } from '@nebular/theme';
import { FileExplorerModule } from 'src/app/components/file-manager/file-explorer/file-explorer.module';
import { FileManagerService } from 'src/app/services/file-manager.service';


@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    SharedModule,
    NbDialogModule.forChild(),
    FileExplorerModule,
  ],
  providers:[
    FileManagerService,
  ]
})
export class FavoritesModule { }
