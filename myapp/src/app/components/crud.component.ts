import { Component } from '@angular/core';

@Component({
	selector: 'crud',
	templateUrl: 'crud.component.html',
	styleUrls: ['crud.component.css']
})
export class CrudComponent {
	// youtube tutorial : https://www.youtube.com/watch?v=REhyWpNbkJQ
	title = 'Angular 2 CRUD operation with an Array';
	employees = [
	{name: "Mary", position: "programmer"},
	{name: "Tom", position: "dog"}
	];
	msg = '';	

	model: any = {};	
	addEmployee(name:string, position:string):void{
		this.employees.push(this.model);
		this.model = {};
		this.msg = 'Indicates a successful or positive action.';
	}
	delEmployee(index:number):void{
		this.employees.splice(index, 1);
	}

	model2: any = {};
	tempIndex;
	editEmployee(index:number):void{
		this.model2= this.employees[index];
		this.tempIndex = index;
	}

	updateEmployee(index:number):void{
		this.employees[this.tempIndex] = this.model2;
		this.model2 = {};
	}

	closeMsg():void{
		this.msg = '';
	}

}
