import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from 'src/app/core/user.service';
import { ValidateFieldsService } from 'src/app/shared/components/fields/validate-fields.service';
import { User } from 'src/app/shared/models/user';


@Component({
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})

export class EditUsersComponent implements OnInit {

  public formEdit: FormGroup;
  public user: User;
  public id: number;

  constructor(public validate: ValidateFieldsService, 
              private formBuilder: FormBuilder,
              private service: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.listById(this.id).subscribe((user: User) => this.buildForm(user));
  }

  private buildForm(user: User) {
    this.formEdit = this.formBuilder.group({
      name: [user.name, [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      imageUrl: [user.imageUrl, [Validators.minLength(10)]],
      email: [user.email, [Validators.required, Validators.minLength(8), Validators.maxLength(256)]],
      page: [user.page, [Validators.minLength(8)]],
      addDate: [user.addDate]});
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
    this.service.updateUser(this.formEdit.value, this.id).subscribe(() => {
      alert("Atualizado com Sucesso");
      this.cancel();
    },
    () => {
      alert("Erro ao atualizar registro");
    });
  }

  public cancel() {
    this.router.navigateByUrl('lista');
  }
}

