import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [{ path: '', component: MainComponent, children: [
  { path:'',loadChildren:() => import('../../pages/my-drive/my-drive.module').then(m=> m.MyDriveModule)},
  { path: 'recent', loadChildren: () => import('../../pages/recent/recent.module').then(m => m.RecentModule) },
  {path: 'favorites', loadChildren: () => import('../../pages/favorites/favorites.module').then(m => m.FavoritesModule)},
  {path: 'trash', loadChildren: () => import('../../pages/trash/trash.module').then(m => m.TrashModule)},
  { path: 'file-upload', loadChildren: () => import('../../pages/file-upload/file-upload.module').then(m => m.FileUploadModule) },
] }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
