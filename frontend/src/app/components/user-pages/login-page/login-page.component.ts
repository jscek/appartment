import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  registerPassword: string;
  registerConfirmPassword: string;


  constructor(private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  validateData(): boolean {
    if (this.registerPassword == this.registerConfirmPassword) {
      return true;
    }
    return false;
  }

  login(): void {
    // TODO: login user
    this.router.navigate(['/profile']);
  }

  register(): void {
    // TODO: register user
    if (this.validateData() == false) {
      this._snackBar.open('Filled passwords are not the same!', 'Close',{
        duration: 3000,
      });
    } else {
      this._snackBar.open('Successfully registered!', 'Close',{
        duration: 3000,
      });
      this.router.navigate(['/profile']);
    }
  }
}