import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPriceValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    // useClass: PriceValidatorDirective,
    useExisting: PriceValidatorDirective,
    multi: true,
  }],
})
export class PriceValidatorDirective implements Validator {
  @Input() appPriceValidator: string|null = null;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = Number(control.value);
    if (typeof this.appPriceValidator === 'string') {
      const price = Number(this.appPriceValidator);
      if (price > value) {
        return {
          appPriceValidator: {
            requiredValue: `${this.appPriceValidator}`,
            currentValue: control.value,
          },
        };
      }
    }

    return null;
  }

}
