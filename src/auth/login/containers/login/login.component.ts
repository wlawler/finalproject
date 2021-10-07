import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'login', 
	templateUrl: './login/login.component.html'
}) 

export class LoginComponent {
	constructor() {}

	loginUser(event: FormGroup) {
		console.log(event.value); 
	}
}