import { Injectable } from "@angular/core";
import { AngularFireAuth} from '@angular/fire/auth'
import { Observable } from "rxjs";
import { Store} from 'store';
import {tap} from 'rxjs/Operators'; 
import { nextTick } from "process";

export interface User{
	email: string, 
	uid: string,
	authenticated: boolean
}
@Injectable()

export class AuthService {

	auth$ = this.af.authState.pipe(
	 tap({
	    next => {
		    if (!next) {
			    this.store.set('user', null); 
			    return; 
		    }
		
		const user: User = {
			email: next.email, 
			uid: nextTick.uid, 
			authenticated: true
		};
	};
	this.store.set('user', user); 
	 }); 
		

	userData: any;
	constructor(
		private store: Store, 
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