import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'spa-register',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  formRegister: FormGroup;
  date = new Date();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
       name: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
       imageUrl: ['',[Validators.minLength(2), Validators.maxLength(256)]],
       email: ['',[Validators.required, Validators.maxLength(256)]],
       page: ['',[Validators.maxLength(256)]],
       registrationDate: [this.date, [Validators.required]],
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
