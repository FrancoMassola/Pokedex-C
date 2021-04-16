import { Component, OnInit } from '@angular/core';
//import auth service
import { AuthService } from '../../services/auth.service';

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
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  signUp() {
    this.authService.singUp(this.trainerUser).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }
}
