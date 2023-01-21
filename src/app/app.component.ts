import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GitHubService } from './gethub.service';
import { GitHubUser } from './githubuser';

import { filter,debounceTime,distinctUntilChanged } from 'rxjs/operators';

@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html',  
	providers: [GitHubService] }) 

export class AppComponent implements OnInit {
	 searchControl = new FormControl();  
	 users: GitHubUser[] = [];
	 constructor(private _githubService: GitHubService){} 

	ngOnInit() { 
	this.searchControl.valueChanges 
	    .pipe(filter(text => text.length >= 3), debounceTime(400),distinctUntilChanged())                
          .subscribe(value => { this._githubService.getGitHubData(value) 
                                    .subscribe(data => {this.users = data.items;});                             
     });          
  } 
}

  
  