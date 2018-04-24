import { Injectable } from '@angular/core';  

@Injectable()
export class welcomeService {  
   getApp(): string { 
      return "Hello world"; 
   } 
} 