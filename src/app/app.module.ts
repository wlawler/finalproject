import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

//import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  //  Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {} 

/*
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

*/
