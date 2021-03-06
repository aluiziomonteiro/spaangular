import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/user.service';
import { ValidateFieldsService } from 'src/app/shared/components/fields/validate-fields.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { Modal } from 'src/app/shared/models/modal';

@Component({
  selector: 'spa-register',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  public formRegister: FormGroup;
  public date = new Date();
  
  constructor(private formBuilder: FormBuilder,
              private service: UserService,
              private router: Router,
              public validate: ValidateFieldsService,
              public dialog: MatDialog) { }

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

      const config = {
        data: {
          title: 'Sucesso!',
          description: 'O Usuário foi registrado com sucesso!',
          bSuccess: 'Lista de Usuários',
          bCancel: 'Adicionar outro Usuário',
          bCancelColor:'accent',
          hasBtnCancel: true,
        } as Modal
      };

      const dialogRef = this.dialog.open(ModalComponent, config);
      
      dialogRef.afterClosed().subscribe((option: boolean) => {
        if(option){
          this.router.navigateByUrl('lista');
        } else {
          this.reset();
        }
      });
    },
      () => {
        const config = {
          data: {
            title: 'Erro ao salvar o registro',
            description: 'Algo deu errado! Por favor, tente mais tarde!',
            bSuccess: 'Ok',
          } as Modal
        };

        const dialogRef = this.dialog.open(ModalComponent, config);

      });
  }

  public reset() {
    this.formRegister.reset();
  }
}
