import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from '../alert/alert.module';
import { AlertService } from '../alert/_services/alert.service';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UtilitiesModule } from '../utilities/utilities.module';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    CardComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AlertModule, UtilitiesModule],
  providers: [AlertService],
  exports: [LoginComponent, DashboardComponent, RegisterComponent]
})
export class UserModule {}
