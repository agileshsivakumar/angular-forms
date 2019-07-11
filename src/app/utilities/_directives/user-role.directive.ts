import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  OnInit,
  Input
} from '@angular/core';
import { UserService } from 'src/app/user/_services/user.service';
import { Role } from 'src/app/user/_models/user';
import { ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[appUserRoles]'
})
export class UserRoleDirective implements OnInit {
  private _userRoles: Role[];
  private isControlVisible = false;

  @Input()
  set appUserRoles(role: Role[]) {
    this._userRoles = role;
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    let isUserAuthorized = true;

    const currentUser = this.userService.getCurrentUser();
    if (currentUser) {
      isUserAuthorized = false;
      this._userRoles.forEach(userRole => {
        if (currentUser.role === userRole) {
          if (currentUser.role === 'admin') {
            isUserAuthorized = true;
          } else {
            isUserAuthorized =
              currentUser.emailId === this.userService.selectedUser.emailId;
          }
          return;
        }
      });
    }
    if (isUserAuthorized) {
      if (!this.isControlVisible) {
        this.isControlVisible = true;
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    } else {
      this.isControlVisible = false;
      this.viewContainerRef.clear();
    }
  }
}
