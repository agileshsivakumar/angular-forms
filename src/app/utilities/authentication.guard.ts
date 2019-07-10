import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { UserService } from '../user/_services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot): boolean {
    switch (next.url[0].path) {
      case 'dashboard': {
        if (this.userService.isUserLoggedIn) {
          return true;
        }
        break;
      }
      case 'register': {
        if (next.url[1].path === 'new' || this.userService.isUserLoggedIn) {
          return true;
        }
        break;
      }
      default:
        break;
    }
    this.router.navigateByUrl('login');
    return false;
  }
}
