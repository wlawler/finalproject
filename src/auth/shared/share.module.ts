import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {  Routes } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";

import {AuthFormComponent};
	
export const ROUTES: Routes = [
	{ path: '', component: RegisterComponent}
]

@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule
	], 
	declarations: [
		AuthFormComponent
	], 
	exports: [
		AuthFormComponent
	]
	
})

export class Sharedrmodule {}