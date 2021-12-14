import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {  Routes } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
//components 
import { RegisterComponent } from "../register/containers/register/register.component";
import { AuthFormComponent } from "./components/auth-form/auth-form.component";

//services
import { AuthService } from "./services/auth/auth.service";
	
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

export class Sharedmodule {
	static forRoot(): ModuleWithProviders<Sharedmodule> {

	return {
		ngModule: Sharedmodule, 
		providers: [
			AuthService

		]
	};
    }

	
}