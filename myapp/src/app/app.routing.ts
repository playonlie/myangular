import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {WelcomepageComponent} from './components/welcomepage.component';
import {AboutComponent} from './components/about.component';
import {CrudComponent} from './components/crud.component';


const appRoutes: Routes = [
	{
		path: '',
		component: WelcomepageComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'crud',
		component: CrudComponent
	}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);