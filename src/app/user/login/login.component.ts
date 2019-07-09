import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  signIn() {
    if (this.username === 'admin' && this.password === 'password') {
      this.router.navigateByUrl('/dashboard');
    }
  }

  signUp() {
    this.router.navigateByUrl('/register');
  }
}
