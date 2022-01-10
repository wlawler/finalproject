import {Component, Output,EventEmitter, Input} from '@angular/core'; 
import  {User} from '../../../auth/shared/services/auth/auth.service'

@Component({
	selector: 'app-header', 
	styleUrls: ['app-header.component.scss'], 
	templateUrl:'./app-header.component.html'
})
export class AppHeaderComponent {
	@Input() 
	user: User ; 
	
	@Output()
	logout = new EventEmitter<any>(); 

	logoutUser() {
		this.logout.emit();
	}
}