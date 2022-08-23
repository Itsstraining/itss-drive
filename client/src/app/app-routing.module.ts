import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'my-drive', loadChildren: () => import('../app/pages/main/main.module').then(m => m.MainModule) }, 
  { path: 'login', loadChildren: () => import('./login-page/login/login.module').then(m => m.LoginModule) }, 
  { path: 'inro', loadChildren: () => import('./pages/inro/inro.module').then(m => m.InroModule) },
  { path: 'SignUp', loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'recent', loadChildren: () => import('./pages/recent/recent.module').then(m => m.RecentModule) },
  {path: 'favorites', loadChildren: () => import('./pages/favorites/favorites.module').then(m => m.FavoritesModule)},
  {path: 'trash', loadChildren: () => import('./pages/trash/trash.module').then(m => m.TrashModule)},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
