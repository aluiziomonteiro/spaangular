import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'spa-register',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  
  formRegister: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
       name: ['',[Validators.required, , Validators.minLength(2), Validators.maxLength(256)]],
       imageUrl: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
       email: ['',[Validators.required, Validators.maxLength(256)]],
       page: ['',[Validators.required, Validators.maxLength(256)]],
       registrationDate: ['', [Validators.required]],
    });
  }
}
