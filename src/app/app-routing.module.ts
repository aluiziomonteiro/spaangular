import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './shared/components/table/table.component';
import { CreateUsersComponent } from './users/create-users/create-users.component';

const routes: Routes = [
  {
    path: '',
    component: CreateUsersComponent
  },
  {
    path: 'cadastro',
    component: CreateUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
