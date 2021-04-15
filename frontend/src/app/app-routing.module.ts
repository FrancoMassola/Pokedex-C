import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import components
import {PokemonslistComponent} from './components/pokemonslist/pokemonslist.component';
import {SigninComponent} from './components/signin/signin.component';
import {SignupComponent} from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pokemonslist',
    pathMatch: 'full'
  },
  //private route
  {
    path: 'pokemonslist',
    component: PokemonslistComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
