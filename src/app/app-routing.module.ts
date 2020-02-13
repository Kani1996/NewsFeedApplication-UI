import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonProfileComponent} from './components/person-profile/person-profile.component';
import {HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { LandingLayoutComponent } from './components/landing-layout/landing-layout.component';
import { NewsApiComponent } from './components/news-api/news-api.component';

const routes: Routes = [
  {
     path: '', component: LandingLayoutComponent, data: {title: 'layout'}
  },
{
  path: 'home', component: HomeComponent, data: { title: 'Home'}
},
{
  path: 'create-profile', component: PersonProfileComponent, data: { title: 'Profile'}
},
{
  path: 'newsApi', component: NewsApiComponent, data: { title: 'News'}
},
{
  path: 'login', component: LoginComponent , data: { title : 'Login' }
},
{
  path: 'user', component: UserPageComponent , data: {title : 'User'}
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
