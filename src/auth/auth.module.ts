import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [

      { path: 'login',
       loadChildren: () => import
        ( './login/login.module').then(m => m.LoginModule) },
      { path: 'register',
       loadChildren:() => import
        ('./register/register.module' ).then(m => m.Registermodule )},
        { path: '', pathMatch: 'full', redirectTo: 'login' },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ], 
  
})
export class AuthModule {}
