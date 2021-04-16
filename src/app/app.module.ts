import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TableComponent } from './shared/components/table/table.component';
import { TopComponent } from './shared/components/top/top.component';
import { CreateUsersComponent } from './users/create-users/create-users.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { InputTextComponent } from './shared/components/fields/input-text/input-text.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ListUsersComponent,
    TableComponent,
    CreateUsersComponent,
    ButtonComponent,
    EditUsersComponent,
    InputTextComponent
  ],
  imports: [
    CommonModule,  
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }