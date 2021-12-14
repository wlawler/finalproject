import { Injectable } from "@angular/core";
import { AngularFireAuth} from '@angular/fire/auth'
import { Observable } from "rxjs";

@Injectable()

export class AuthService {
	userData: any;
	constructor(
		private af: AngularFireAuth 
	) { this.userData = af.authState; }

	createUser(email: string, password:string) {
		return this.af   
		.createUserWithEmailAndPassword(email, password); 
	}

	loginUser(email: string, password: string) {
		return this.af
		 .signInWithEmailAndPassword(email, password); 
	}
}