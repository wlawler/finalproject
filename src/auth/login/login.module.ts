import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './containers/login/login.component';
import { Sharedmodule } from "../shared/shared.module";
import { AngularFirestore } from "@angular/fire/firestore";
import { AuthService } from "../shared/services/auth/auth.service";

export const ROUTES: Routes = [
	{ path: '', component: LoginComponent}
]; 

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES), 
		Sharedmodule
	], 
	declarations: [
		LoginComponent
	],
	providers: [
		AngularFirestore,
		AuthService
	] 
	
})

export class LoginModule {}