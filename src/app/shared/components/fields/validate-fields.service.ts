import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidateFieldsService {

  constructor() { }

   // Generico para pegar o input e o nome do erro que deve ser verificado
   hasErrorValidate( control: AbstractControl, errorName: string): boolean {
    if ((control.dirty || control.touched) && this.hasError(control,errorName)){
      return true;
    } else {
      return false;
    }
  }

  // Generico para pegar o input e o nome do erro que deve ser verificado
  hasError( control: AbstractControl, errorName: string): boolean {
    return control.hasError(errorName);
  }
}
