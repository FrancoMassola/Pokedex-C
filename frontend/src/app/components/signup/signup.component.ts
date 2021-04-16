import { Component, OnInit } from '@angular/core';
//import auth service
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  trainerUser = {
    username: '',
    password: '',
  };

  //Generate a Service class instance
  constructor(private authService: AuthService,
              private router: Router            
    ) {}

  ngOnInit(): void {}

  signUp() {
    this.authService.singUp(this.trainerUser).subscribe(
      (res) => {
        console.log(res);
        //set token to localStorage
        localStorage.setItem('token',res.token);
        this.router.navigate(['/signin']);
      },
      (err) => console.log(err)
    );
  }
}
