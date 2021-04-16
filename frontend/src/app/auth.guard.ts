import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
//import auth service
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  //create constructor
  constructor(private authService: AuthService, private router: Router){}//private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }
   
      console.log("no token");
    
      this.router.navigate(['/signin']);
    return false;
    }
  
}

