import { Component, OnInit } from '@angular/core';
import { GitHubService } from './gethub.service';


@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html',  
	providers: [GitHubService] }) 

export class AppComponent {
	
}

  
  