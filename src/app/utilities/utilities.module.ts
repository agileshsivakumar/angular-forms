import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaskPhoneNumberDirective } from './_directives/mask-phone-number.directive';
import { UserRoleDirective } from './_directives/user-role.directive';

@NgModule({
  declarations: [MaskPhoneNumberDirective, UserRoleDirective],
  imports: [CommonModule],
  exports: [MaskPhoneNumberDirective, UserRoleDirective]
})
export class UtilitiesModule {}
