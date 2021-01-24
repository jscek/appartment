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

  registerEmail: string;
  registerName: string;
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
    this.authService
      .login(this.loginEmail, this.loginPassword)
      .pipe(first())
      .subscribe((_data) => {
        this.router.navigateByUrl(this.returnUrl);
      });
  }

  register(): void {
    if (this.validateData() == false) {
      this._snackBar.open('Filled passwords are not the same!', 'Close', {
        duration: 3000,
      });
    } else {
      this.authService
        .register(this.registerEmail, this.registerPassword, this.registerName)
        .pipe(first())
        .subscribe((data) => {
          this.authService
            .login(this.registerEmail, this.registerPassword)
            .pipe(first())
            .subscribe((_data) => {
              this.router.navigateByUrl(this.returnUrl);
            });
        });

      this._snackBar.open('Successfully registered!', 'Close', {
        duration: 3000,
      });
    }
  }
}
