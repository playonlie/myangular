import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WelcomepageComponent } from './components/welcomepage.component';
import { AboutComponent } from './components/about.component';
import { CrudComponent } from './components/crud.component';
import { routing } from './app.routing';

import { AlertModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WelcomepageComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
