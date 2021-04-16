import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL = 'http://localhost:3000/';

  //Generate class instance
  constructor(private http: HttpClient) {}

  singUp(user) {
    //return object observable
    return this.http.post<any>(`${this.URL}/signup`, user);
  }
}
