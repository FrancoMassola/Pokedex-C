import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//add module to manipulate forms
import { FormsModule } from '@angular/forms';
//add module to manipulate services
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { PokemonslistComponent } from './components/pokemonslist/pokemonslist.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    PokemonslistComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
