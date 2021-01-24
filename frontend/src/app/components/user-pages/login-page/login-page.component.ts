import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  returnUrl: string;

  loginEmail: string;
  loginPassword: string;

  registerPassword: string;
  registerConfirmPassword: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.authService.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  validateData(): boolean {
    if (this.registerPassword == this.registerConfirmPassword) {
      return true;
    }
    return false;
  }

  login(): void {
    // TODO: login user
    // this.router.navigate(['/profile']);
    this.authService
      .login(this.loginEmail, this.loginPassword)
      .pipe(first())
      .subscribe((data) => {
        this.router.navigateByUrl(this.returnUrl);
      });
  }

  register(): void {
    // TODO: register user
    if (this.validateData() == false) {
      this._snackBar.open('Filled passwords are not the same!', 'Close', {
        duration: 3000,
      });
    } else {
      this._snackBar.open('Successfully registered!', 'Close', {
        duration: 3000,
      });
      this.router.navigate(['/profile']);
    }
  }
}
