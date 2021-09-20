import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {  Routes } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";

import { RegisterComponent } from "../register/containers/register/register.component";
import { AuthFormComponent } from "./components/auth-form/auth-form.component";
	
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