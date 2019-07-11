import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from '../alert/alert.module';
import { UtilitiesModule } from '../utilities/utilities.module';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaskPhoneNumberDirective } from './_directives/mask-phone-number.directive';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    CardComponent,
    MaskPhoneNumberDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    UtilitiesModule
  ],
  exports: [LoginComponent, DashboardComponent, RegisterComponent]
})
export class UserModule {}
