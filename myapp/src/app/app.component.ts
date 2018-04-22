import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	WebName : string;

	constructor(){
		this.WebName = "Demo Site ver. Angular2";
	}

}
