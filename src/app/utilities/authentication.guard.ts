import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/_services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(): boolean {
    if (this.userService.isUserLoggedIn) {
      return true;
    }
    this.router.navigateByUrl('login');
    return false;
  }
}
