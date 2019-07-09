import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_service/user.service';
import { User } from '../_model/user';
import { AlertService } from 'src/app/alert/_services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public registrationFormGroup: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) {
    this.buildRegisterationForm();
  }

  public buildRegisterationForm(): void {
    this.registrationFormGroup = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      emailId: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  get firstName(): AbstractControl {
    return this.registrationFormGroup.get('firstName');
  }
  get lastName(): AbstractControl {
    return this.registrationFormGroup.get('lastName');
  }
  get emailId(): AbstractControl {
    return this.registrationFormGroup.get('emailId');
  }
  get username(): AbstractControl {
    return this.registrationFormGroup.get('username');
  }
  get password(): AbstractControl {
    return this.registrationFormGroup.get('password');
  }

  public register(): void {
    const user: User = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      emailId: this.emailId.value,
      username: this.username.value,
      password: this.password.value
    };
    if (this.userService.saveUser(user)) {
      this.router.navigateByUrl('/dashboard');
    } else {
      this.alertService.push({
        message: 'User already exists!',
        type: 'error'
      });
    }
  }
}
