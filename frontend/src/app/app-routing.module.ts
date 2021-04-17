import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import components
import {PokemonslistComponent} from './components/pokemonslist/pokemonslist.component';
import {SigninComponent} from './components/signin/signin.component';
import {SignupComponent} from './components/signup/signup.component';
import {PokemoneditComponent} from './components/pokemonedit/pokemonedit.component';
//import guard to protect the sessions
import{AuthGuard} from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  //private route
  {
    path: 'pokemonslist',
    component: PokemonslistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'edit',
    component: PokemoneditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
