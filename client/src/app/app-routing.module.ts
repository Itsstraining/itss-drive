import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'my-drive', 
    loadChildren: () => 
    import('./pages/main/main.module').then(m => m.MainModule) 
  },
  { path: 'recent', loadChildren: () => import('./pages/recent/recent.module').then(m => m.RecentModule) },
  { path: 'favorites', loadChildren: () => import('./pages/favorites/favorites.module').then(m => m.FavoritesModule) },
  { path: 'trash', loadChildren: () => import('./pages/trash/trash.module').then(m => m.TrashModule) },




  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
