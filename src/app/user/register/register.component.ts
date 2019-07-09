import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../_services/user.service';
import { User, Mode } from '../_models/user';
import { AlertService } from 'src/app/alert/_services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public registrationFormGroup: FormGroup;
  public mode: Mode;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildRegisterationForm();
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.mode = params.get('mode') as Mode;
      if (params.get('emailId')) {
        this.loadRegistrationForm(
          this.userService.getUserWithEmail(params.get('emailId'))
        );
      }
    });
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

  loadRegistrationForm(user: User) {
    this.firstName.setValue(user.firstName);
    this.lastName.setValue(user.lastName);
    this.emailId.setValue(user.emailId);
    this.username.setValue(user.username);
    if (this.mode === 'view') {
      this.registrationFormGroup.disable();
    }
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

  close() {
    if (this.mode === 'view') {
      this.router.navigateByUrl('/dashboard');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
