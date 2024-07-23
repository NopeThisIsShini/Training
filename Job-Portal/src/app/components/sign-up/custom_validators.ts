// custom-validators.ts
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static passwordCriteria(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const errors: ValidationErrors = {};

    if (!/[A-Z]/.test(value)) {
      errors.uppercase = 'Password must contain at least one uppercase letter';
    }
    if (!/[a-z]/.test(value)) {
      errors.lowercase = 'Password must contain at least one lowercase letter';
    }
    if (!/[0-9]/.test(value)) {
      errors.digit = 'Password must contain at least one digit';
    }
    if (!/[!@#$%^&*()\-+.]/.test(value)) {
      errors.special = 'Password must contain at least one special character';
    }
    if (value.length < 6 || value.length > 20) {
      errors.length = 'Password must be between 6 and 20 characters long';
    }

    return Object.keys(errors).length ? errors : null;
  }
}
