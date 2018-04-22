import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {WelcomepageComponent} from './components/welcomepage.components';
import {AboutComponent} from './components/about.component';


const appRoutes: Routes = [
	{
		path: '',
		component: WelcomepageComponent
	},
	{
		path: 'about',
		component: AboutComponent
	}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);