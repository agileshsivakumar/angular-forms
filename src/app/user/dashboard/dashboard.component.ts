import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(public userService: UserService, private router: Router) {}

  logout() {
    this.userService.logoutUser();
    this.router.navigateByUrl('');
  }

  public viewUser(user: User) {
    this.userService.selectedUser = user;
    this.router.navigate(['/register', 'view', user.emailId]);
  }
}
