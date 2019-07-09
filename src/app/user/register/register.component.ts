import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public registrationFormGroup: FormGroup;

  constructor(private router: Router) {
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
      emailId: new FormControl('', [Validators.required, Validators.email])
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

  public register(): void {
    this.router.navigateByUrl('/dashboard');
  }
}
