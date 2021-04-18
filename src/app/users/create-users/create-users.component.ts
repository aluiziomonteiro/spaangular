import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/user.service';
import { ValidateFieldsService } from 'src/app/shared/components/fields/validate-fields.service';

@Component({
  selector: 'spa-register',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  public formRegister: FormGroup;
  public date = new Date();
  
  constructor(public validate: ValidateFieldsService, 
              private formBuilder: FormBuilder,
              private service: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
       name: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(256)]],
       imageUrl: ['',[Validators.minLength(8)]],
       email: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(256)]],
       page: ['',[Validators.minLength(8)]],
       addDate: [this.date],
    });
  }

  public get f (){
    return this.formRegister.controls;
  }

  public submit(): void{
    this.formRegister.markAllAsTouched();
    if(this.formRegister.invalid) {
      return;
    } else { 
      this.createUser();
    }
  }

  private createUser() {
    this.service.create(this.formRegister.value).subscribe(() => {
      alert("Adicionado com sucesso!");
      this.router.navigateByUrl("lista");
    },
      () => {
        alert("Algo de errado ao adicionar usuário!");
      });
  }

  public reset() {
    this.formRegister.reset();
  }

}
