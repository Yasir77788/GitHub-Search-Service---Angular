import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { GitHubService } from '../gethub.service';
import { GitHubUser } from '../githubuser';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

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
