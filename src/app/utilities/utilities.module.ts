import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaskPhoneNumberDirective } from './_directives/mask-phone-number.directive';
import { AuthenticationGuard } from './_services/authentication.guard';

@NgModule({
  declarations: [MaskPhoneNumberDirective],
  imports: [CommonModule],
  providers: [AuthenticationGuard],
  exports: [MaskPhoneNumberDirective]
})
export class UtilitiesModule {}
