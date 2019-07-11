import { MaskPhoneNumberDirective } from './mask-phone-number.directive';
import { Renderer2 } from '@angular/core';

describe('MaskPhoneNumberDirective', () => {
  it('should create an instance', () => {
    let renderer: Renderer2;
    const directive = new MaskPhoneNumberDirective(renderer);
    expect(directive).toBeTruthy();
  });
});
