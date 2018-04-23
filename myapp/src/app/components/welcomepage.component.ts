import { Component } from '@angular/core';
import { welcomeService } from '../services/welcomepage.service';

@Component({
  selector: 'Welcomepage',
  templateUrl: 'welcomepage.component.html',
  providers: [welcomeService]
})
export class WelcomepageComponent {	
	title : string;
	user : User = {
		name: '',
		email: ''
	};

	constructor(){
		this.title = "Welcome";		
	}

	userEntry(input){
		console.log(input);
	}

	interface User(){
		name: string;
		email: string;
	}

	

}
