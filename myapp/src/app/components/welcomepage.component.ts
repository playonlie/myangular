import { Component } from '@angular/core';
import { welcomeService } from '../services/welcomepage.service';
import { appService } from '../app.service';

@Component({
  selector: 'Welcomepage',
  templateUrl: 'welcomepage.component.html',
  providers: [welcomeService]
})
export class WelcomepageComponent {	
	title : string;
	msg : string;
	boxshown : boolean;


	constructor(private _appService : appService){
		this.title = "Welcome";	
		this.msg = "";	
		this.boxshown = true;
	}

	userEntry(input){
		console.log(input);
		this.msg = "Hello " + input + ", this is welcome message";
		this.boxshown = false;
		
	}

	

}
