import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { UserService } from 'src/app/core/user.service';
import { ValidateFieldsService } from 'src/app/shared/components/fields/validate-fields.service';
import { User } from 'src/app/shared/models/user';

let user: User;

@Component({
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})

export class EditUsersComponent implements OnInit {
  public formEdit: FormGroup;
  
  public id: number;

  constructor(public validate: ValidateFieldsService, 
              private formBuilder: FormBuilder,
              private service: UserService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.listById(this.id).subscribe(obj => user = obj);

    this.formEdit = this.formBuilder.group({
       name: [user.name,[Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
       imageUrl: [user.imageUrl,[Validators.minLength(10)]],
       email: [user.email,[Validators.required, Validators.minLength(8), Validators.maxLength(256)]],
       page: [user.page,[Validators.minLength(8)]],
       addDate: [user.addDate],
    });
  }

  public get f (){
    return this.formEdit.controls;
  }

  public submit(): void{
    this.formEdit.markAllAsTouched();
    if(this.formEdit.invalid) {
      return;
    } else { 
      this.updateUser();
    }
  }

  private updateUser() {
    this.service.updateUser(this.formEdit.value, user.id).subscribe(() => {
      alert("Atualizado com Sucesso");
    },
      () => {
        alert("Erro ao atualizar registro");
      });
  }

  public cancel() {
    this.formEdit.reset();
  }
}
