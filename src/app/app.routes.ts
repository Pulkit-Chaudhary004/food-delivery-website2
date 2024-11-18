import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HelpPageComponent } from './help-page/help-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';




export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'help-page', component: HelpPageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  
 

];
