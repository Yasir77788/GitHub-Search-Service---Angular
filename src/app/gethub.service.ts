import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import {Result} from './result';


@Injectable()
export class GitHubService{ 
	constructor(private _http: HttpClient){ } 
	getGitHubData(_searchTerm: string):Observable<Result>{
		return this._http.get<Result> ("https://api.github.com/search/users?q="+_searchTerm);                    
     } 
}

