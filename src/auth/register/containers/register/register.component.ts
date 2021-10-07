import { Component } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';

@Component({
	selector: 'register', 
	templateUrl: './register/register.component.html'
}) 

export class RegisterComponent {
	constructor() {}

	registerUser(event: FormGroup) {
		console.log(event.value); 
	}

}
