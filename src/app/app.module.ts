import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material-module';

import { TableComponent } from './shared/components/table/table.component';
import { TopComponent } from './shared/components/top/top.component';
import { CreateUsersComponent } from './users/create-users/create-users.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { InputTextComponent } from './shared/components/fields/input-text/input-text.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { InputDateComponent } from './shared/components/fields/input-date/input-date.component';
import { ModalComponent } from './shared/components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    ListUsersComponent,
    TableComponent,
    CreateUsersComponent,
    ButtonComponent,
    EditUsersComponent,
    InputTextComponent,
    FooterComponent,
    InputDateComponent,
    ModalComponent,

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
entryComponents:[ModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }