import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { AlertModule } from '../alert/alert.module';
import { AlertService } from '../alert/_services/alert.service';

@NgModule({
  declarations: [LoginComponent, DashboardComponent, RegisterComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AlertModule],
  providers: [AlertService],
  exports: [LoginComponent, DashboardComponent, RegisterComponent]
})
export class UserModule {}
