import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Sharedrmodule } from "../shared/share.module";

import {RegisterComponent} from './containers/register/register.component';

export const ROUTES: Routes = [
	{ path: '', component: RegisterComponent}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES), 
		Sharedrmodule
	], 
	declarations: [
		RegisterComponent
	], 
	
})

export class Registermodule {}