import {
  Directive,
  Input,
  OnInit,
  OnDestroy,
  ElementRef,
  Renderer2
} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appMaskPhoneNumber]'
})
export class MaskPhoneNumberDirective implements OnInit, OnDestroy {
  private _phoneNumberControl: AbstractControl;
  private _phoneNumberValue: string;

  private phoneControlValueChangesSubscription: Subscription;

  @Input()
  set phoneNumberControl(control: AbstractControl) {
    this._phoneNumberControl = control;
  }
  @Input()
  set phoneNumberValue(value: string) {
    this._phoneNumberValue = value;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.maskPhoneNumber();
  }

  ngOnDestroy() {
    this.phoneControlValueChangesSubscription.unsubscribe();
  }

  private maskPhoneNumber() {
    this.phoneControlValueChangesSubscription = this._phoneNumberControl.valueChanges.subscribe(
      data => {
        const phoneNumber: string = this._phoneNumberValue;

        const lastCharacterOfPhoneNumber: string = phoneNumber.substr(
          phoneNumber.length - 1
        );

        // remove all mask characters (keep only numeric)
        let phoneNumberWithoutMask = data.replace(/\D/g, '');

        let start = this.renderer.selectRootElement('#phone-number-id').selectionStart;
        let end = this.renderer.selectRootElement('#phone-number-id').selectionEnd;

        if (data.length < phoneNumber.length) {
          if (phoneNumber.length < start) {
            if (lastCharacterOfPhoneNumber === ')') {
              phoneNumberWithoutMask = phoneNumberWithoutMask.substr(
                0,
                phoneNumberWithoutMask.length - 1
              );
            }
          }
          if (phoneNumberWithoutMask.length === 0) {
            phoneNumberWithoutMask = '';
          } else if (phoneNumberWithoutMask.length <= 3) {
            phoneNumberWithoutMask = phoneNumberWithoutMask.replace(
              /^(\d{0,3})/,
              '($1'
            );
          } else if (phoneNumberWithoutMask.length <= 6) {
            phoneNumberWithoutMask = phoneNumberWithoutMask.replace(
              /^(\d{0,3})(\d{0,3})/,
              '($1) $2'
            );
          } else {
            phoneNumberWithoutMask = phoneNumberWithoutMask.replace(
              /^(\d{0,3})(\d{0,3})(.*)/,
              '($1) $2-$3'
            );
          }

          this._phoneNumberControl.setValue(phoneNumberWithoutMask, {
            emitEvent: false
          });

          this.renderer.selectRootElement('#phone-number-id').setSelectionRange(start, end);
        } else {
          const phoneNumberRemoved = data.charAt(start);
          if (phoneNumberWithoutMask.length === 0) {
            phoneNumberWithoutMask = '';
          } else if (phoneNumberWithoutMask.length <= 3) {
            phoneNumberWithoutMask = phoneNumberWithoutMask.replace(
              /^(\d{0,3})/,
              '($1)'
            );
          } else if (phoneNumberWithoutMask.length <= 6) {
            phoneNumberWithoutMask = phoneNumberWithoutMask.replace(
              /^(\d{0,3})(\d{0,3})/,
              '($1) $2'
            );
          } else {
            phoneNumberWithoutMask = phoneNumberWithoutMask.replace(
              /^(\d{0,3})(\d{0,3})(.*)/,
              '($1) $2-$3'
            );
          }
          if (phoneNumber.length >= start) {
            if (phoneNumberRemoved === '(') {
              start = start + 1;
              end = end + 1;
            }
            if (phoneNumberRemoved === ')') {
              start = start + 2;
              end = end + 2;
            }
            if (phoneNumberRemoved === '-') {
              start = start + 1;
              end = end + 1;
            }
            if (phoneNumberRemoved === ' ') {
              start = start + 1;
              end = end + 1;
            }
            this._phoneNumberControl.setValue(phoneNumberWithoutMask, {
              emitEvent: false
            });
            this.renderer
              .selectRootElement('#phone-number-id')
              .setSelectionRange(start, end);
          } else {
            this._phoneNumberControl.setValue(phoneNumberWithoutMask, {
              emitEvent: false
            });
            this.renderer
              .selectRootElement('#phone-number-id')
              .setSelectionRange(start + 2, end + 2);
          }
        }
      }
    );
  }
}
