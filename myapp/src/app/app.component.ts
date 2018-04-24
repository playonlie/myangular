import { Component } from '@angular/core';
import { appService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [appService]
})
export class AppComponent {
	WebName : string;
	LoginName : string;
	textBool = true;

	constructor(private _appService: appService){
		this.WebName = "Demo Site ver. Angular2";
		this.LoginName = "Demo Site ver. Angular2";
	}

	setLoginName(lname : string) : void{
		this.LoginName = lname;
	}

	ngOnInit(): void{
		console.log(this._appService.getApp());

	}

	navClicked(pagename : string): void{
		alert("clicked" + pagename);
	}

}
