import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomepageComponent } from './components/welcomepage.components';
import { AboutComponent } from './components/about.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WelcomepageComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
