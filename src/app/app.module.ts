import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubComponent } from './github/github.component';
import { routing } from './app.routing';
import { GithubUserComponent } from './github-user/github-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    GithubComponent,
    GithubUserComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
