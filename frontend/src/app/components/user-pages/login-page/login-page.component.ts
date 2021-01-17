import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    // TODO: login user
    this.router.navigate(['/profile']);
  }

  register(): void {
    // TODO: register user and login
    this.router.navigate(['/profile']);
  }

}
