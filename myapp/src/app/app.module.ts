import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomepageComponent } from './components/welcomepage.component';
import { AboutComponent } from './components/about.component';
import { routing } from './app.routing';

import { AlertModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WelcomepageComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
