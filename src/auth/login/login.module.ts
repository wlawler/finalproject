import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './containers/login/login.component';
import { Sharedrmodule } from "../shared/share.module";

export const ROUTES: Routes = [
	{ path: '', component: LoginComponent}
]; 

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES), 
		Sharedrmodule
	], 
	declarations: [
		LoginComponent
	], 
	
})

export class LoginModule {}