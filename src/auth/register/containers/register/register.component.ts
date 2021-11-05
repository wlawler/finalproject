import { Component } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { AuthService } from 'src/auth/shared/services/auth/auth.service';

@Component({
	selector: 'register', 
	templateUrl: './register.component.html'
}) 

export class RegisterComponent {

	error: string ; 
	constructor(
		private authService: AuthService
	) {}

	async registerUser(event: FormGroup) {
		const { email, password } = event.value ;
		try { 
		await this.authService.createUser(email, password); 
		}
		catch(err) {
                 this.error = err.message; 
		}
		//done 
	}

}
