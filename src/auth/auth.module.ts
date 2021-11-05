import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';




//third-party-modules 
//import {AngularFireModule, firebaseappconfig} from 'angularfire2'
//import {AngularFireAuthModule} 'angularfire2/auth'
//import AngularFireDatabaseModule from 'angularfire2/database'; 

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

/* export const firebaseConfig: FirebaseAppConfig = {

	apiKey: "AIzaSvCXz7GrHLBs-xlsCrr185iG4v4UrNreq2Y", 
	authDomain: "fitness-app-e668a.firebaseapp.com", 
	databareURL: "https://fitness-app-e668a.firebaseio.com", 
	projectId: "fitness-app-e668a", 
	storageBucket: "fitness-app-e668a.appspot.com", 
	messagingSenderId: "1014564696462"
}
*/

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES), 
    AngularFireModule,
   // AngularFireAuthModule.initializeApp(firebaseConfig) ,
  // AngularFireDatabaseModule
  Sharedmodule.forRoot()
  ], 
  
})
export class AuthModule {}
