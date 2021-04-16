import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidateFieldsService {

  constructor() { }

   hasErrorValidate( control: AbstractControl, errorName: string): boolean {
    if ((control.dirty || control.touched) && this.hasError(control,errorName)){
      return true;
    } else {
      return false;
    }
  }

  hasError( control: AbstractControl, errorName: string): boolean {
    return control.hasError(errorName);
  }
}
