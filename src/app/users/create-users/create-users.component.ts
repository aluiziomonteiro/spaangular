import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateFieldsService } from 'src/app/shared/components/fields/validate-fields.service';

@Component({
  selector: 'spa-register',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  formRegister: FormGroup;
  date = new Date();
  
  constructor(public validate: ValidateFieldsService, 
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
       name: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
       imageUrl: ['',[Validators.minLength(10)]],
       email: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(256)]],
       page: ['',[Validators.minLength(8)]],
       registrationDate: [this.date],
    });
  }

  get f (){
    return this.formRegister.controls;
  }

  submit(): void{
    this.formRegister.markAllAsTouched();
    if(this.formRegister.invalid) {
      return;
    } else {
      alert(JSON.stringify(this.formRegister.value, null, 4));
    }
  }

}
