import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function mustBeTrueValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value !== true) {
      return { 'mustBeTrue': true };
    }
    return null;
  };
}
