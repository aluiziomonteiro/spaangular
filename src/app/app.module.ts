import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './shared/components/table/table.component';
import { TopComponent } from './shared/components/top/top.component';
import { CreateUsersComponent } from './users/create-users/create-users.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { FieldsModule } from './shared/components/fields/fields.module';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ListUsersComponent,
    TableComponent,
    CreateUsersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FieldsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }