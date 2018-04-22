import { Component } from '@angular/core';

@Component({
  selector: 'Welcomepage',
  templateUrl: 'welcomepage.component.html'
})
export class WelcomepageComponent {	
	title : string;

	constructor(){
		this.title = "Welcome";
	}

}
