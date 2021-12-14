import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';



//third-party-modules 

//import {firebaseConfig} from '../environments/environment'
//import {AngularFireDatabaseModule} from '@angular/fire/compat/database'; 

//shared modules 
import { Sharedmodule } from './shared/shared.module';

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

const firebaseConfig = {
  apiKey: "AIzaSyCcE5f1tP82bllk9LIrk_TIgFjIbshNS7M",
  authDomain: "fitness-app-c6b29.firebaseapp.com",
  databaseURL: "https://fitness-app-c6b29-default-rtdb.firebaseio.com",
  projectId: "fitness-app-c6b29",
  storageBucket: "fitness-app-c6b29.appspot.com",
  messagingSenderId: "927413877196",
  appId: "1:927413877196:web:6bad1c7a2ac0aca2df0569",
  measurementId: "G-05BHX2SXH9"
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES), 
    AngularFireModule,
  // AngularFireDatabaseModule
  Sharedmodule
  ], 
  
})
export class AuthModule {}
