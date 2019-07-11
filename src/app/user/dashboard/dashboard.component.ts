import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';
import { AlertService } from 'src/app/alert/_services/alert.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(
    public userService: UserService,
    private router: Router,
    private alertService: AlertService
  ) {}

  public addUser(): void {
    this.router.navigate(['/register', 'new', '']);
  }

  public viewUser(user: User): void {
    this.userService.selectedUser = user;
    this.router.navigate(['/register', 'view', user.emailId]);
  }

  public deleteUser(user: User): void {
    if (!this.userService.deleteUser(user)) {
      this.alertService.push({
        message: 'Cannot delete Administrator',
        type: 'error',
        fullPage: true
      });
    }
  }

  public logout(): void {
    this.userService.logoutUser();
    this.router.navigateByUrl('');
  }
}
