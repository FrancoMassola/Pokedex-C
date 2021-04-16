import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL = 'http://localhost:3000/api/';

  //Generate class instance
  constructor(private http: HttpClient, private router: Router) {}

  singUp(user) {
    //return object observable
    return this.http.post<any>(`${this.URL}signup`, user);
  }

  singIn(user){
    //return object observable
    return this.http.post<any>(`${this.URL}signin`, user);
  }

  //guard controller
  loggedIn(){
    if(localStorage.getItem('token')){
      return true;
    }
    else{
      return false;
    }
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }



}
