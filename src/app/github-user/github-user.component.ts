import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {

  login: string = ''; 
  score: number = 0; 
  subscription!: Subscription; 
	constructor(private _route: ActivatedRoute){ }

  ngOnInit(): void {
    this.subscription = this._route.params.subscribe(
      params => { this.login = params["login"]; 
          this.score = params["score"]; })
  }

}
