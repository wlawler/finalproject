import { Injectable } from "@angular/core";
import { AngularFireAuth} from '@angular/fire'

@Injectable()

export class AuthService {
	constructor(
		private af: AngularFireAuth 
	) {}

	createUser(email: string, password:string) {
		return this.af.auth 
		.createUserwithEmailAndPassword(email, password); 
	}

	loginUser(email: string, password: string) {
		return this.af.auth 
		 .signInWithEmailAndPassword(email, password); 
	}
}