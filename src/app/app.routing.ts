import { RouterModule } from '@angular/router'; 
import { GithubUserComponent } from './github-user/github-user.component';
import { GithubComponent } from './github/github.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { HomeComponent } from './home/home.component'; 
// import { NotFoundComponent } from './not-found/not-found.component'; 
// import { GithubComponent } from './github/github.component';

export const routing = RouterModule.forRoot([ 
	{path: '', component: HomeComponent}, 
	{path: 'GitHub', component: GithubComponent}, 
	{path: 'GitHub/user/:login/:score', component: GithubUserComponent},
	{path: '**', component: NotFoundComponent} 
      ]);
