import { Injectable } from '@angular/core';  
import { AppComponent } from './app.component';

@Injectable()
export class appService {  
   getApp(): string { 
      return "Hello world"; 
   }

} 