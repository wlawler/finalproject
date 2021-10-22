import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
	selector: 'auth-form', 
	templateUrl: './auth-form.component.html',
	styleUrls:['auth-form.component.scss']
}) 

export class AuthFormComponent {
	
	form = this.fb.group({
		email: ['', Validators.email],
		password: ['', Validators.required]

	})
	constructor(
	 private	fb: FormBuilder
	) {}

}
