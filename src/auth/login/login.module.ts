import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent};

export const ROUTES: Routes = [
	{ path: '', component: LoginComponent}
]; 

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	], 
	declarations: [
		LoginComponent
	], 
	
})

export class LoginModule {}