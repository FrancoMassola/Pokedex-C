import { Component, OnInit } from '@angular/core';
//import auth service
import { AuthService } from '../../services/auth.service';
//import router  - navegate pokemons list
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  trainerUser = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService,
              private router: Router
    ) {}

  ngOnInit(): void {}

  signIn() {
    this.authService.singIn(this.trainerUser).subscribe(
      (res) => {
        //set token to localstorage
        localStorage.setItem('token', res.token);
        this.router.navigate(['/pokemonslist']);
      },
      (err) => console.log(err)
    );
  }
}
