import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUsersComponent } from './create-users/create-users.component';
import { ListUsersComponent } from './list-users/list-users.component';

@NgModule({
  declarations: [
    CreateUsersComponent, 
    ListUsersComponent
  ],
  imports: [
    CommonModule,  
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    CreateUsersComponent, 
    ListUsersComponent
  ]
})

export class UsersModule { }
