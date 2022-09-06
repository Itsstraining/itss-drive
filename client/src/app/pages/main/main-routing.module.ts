import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [{ path: '', component: MainComponent, children: [
  { path: 'my-drive',loadChildren:() => import('../my-drive/my-drive.module').then(m=> m.MyDriveModule)},
  { path: 'recent', loadChildren: () => import('../../pages/recent/recent.module').then(m => m.RecentModule) },
  { path: 'favorites', loadChildren: () => import('../../pages/favorites/favorites.module').then(m => m.FavoritesModule)},
  { path: 'trash', loadChildren: () => import('../../pages/trash/trash.module').then(m => m.TrashModule)},
  { path: 'profile', loadChildren: () => import('../../pages/profile/profile/profile.module').then(m => m.ProfileModule) },
] }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
