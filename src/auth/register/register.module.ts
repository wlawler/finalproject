import { /*ModuleWithProviders*/ NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Sharedmodule } from "../shared/shared.module";

import {RegisterComponent} from './containers/register/register.component';
import { AngularFirestore } from "@angular/fire/firestore";
import { AuthService } from "../shared/services/auth/auth.service";

export const ROUTES: Routes = [
	{ path: '', component: RegisterComponent}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES), 
		Sharedmodule
	], 
	declarations: [
		RegisterComponent
	],
	providers: [
		AngularFirestore,
	        AuthService
	] 
	
})

export class Registermodule {


/*	static forRoot(): ModuleWithProviders {
		return {
                    ngModule : SharedModule, 
		    providers: [
			    AuthService
		    ]
		};*/
	}
