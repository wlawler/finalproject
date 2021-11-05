import { /*ModuleWithProviders*/ NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Sharedmodule } from "../shared/shared.module";

import {RegisterComponent} from './containers/register/register.component';

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
