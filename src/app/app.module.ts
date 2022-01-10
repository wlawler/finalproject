import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule}  from '@angular/router';

//firebase
import { environment } from "src/environments/environment"; 
import { AngularFireModule } from "@angular/fire";
import { AngularFirestore, AngularFirestoreModule} from "@angular/fire/firestore"

import { Store } from "../store";

// feature modules 
import { AuthModule } from "../auth/auth.module";

// containers 
import { AppComponent } from "./containers/app.component";

//components
import { AppHeaderComponent} from "./components/app-header/app-header.component";
import {AppNavComponent} from "./components/app-nav/app-nav.component"

// routes

export const ROUTES: Routes = []; 

@NgModule ({
	imports: [
		BrowserModule, 
		RouterModule.forRoot(ROUTES), 
		AuthModule,
		AngularFireModule.initializeApp(environment.firebase), 
		AngularFirestoreModule
	], 
	declarations: [
		AppComponent,
		AppHeaderComponent,
		AppNavComponent
	],
	providers: [
		Store,
		AngularFirestore
	], 
	bootstrap: [
		AppComponent
	]
})

export class AppModule {}

