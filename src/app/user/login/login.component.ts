import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertService } from 'src/app/alert/_services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public username: string;
  public password: string;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) {}

  signIn() {
    if (this.userService.authenticateUser(this.username, this.password)) {
      this.router.navigateByUrl('/dashboard');
    } else {
      this.alertService.push({
        message: 'User not authenticated',
        type: 'error'
      });
    }
  }

  signUp() {
    this.router.navigate(['/register', 'new', '']);
  }
}
