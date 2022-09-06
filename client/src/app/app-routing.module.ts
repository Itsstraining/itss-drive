import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
  { path: 'login', loadChildren: () => import('./login-page/login/login.module').then(m => m.LoginModule) }, 
  { path: 'intro', loadChildren: () => import('./pages/inro/inro.module').then(m => m.InroModule) },
  { path: 'signup', loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule) },
<<<<<<< HEAD
=======

>>>>>>> d4946db217b4593fd028c0b9774bb96de99ea1b3
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
