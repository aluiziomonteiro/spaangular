import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateUsersComponent } from './users/create-users/create-users.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { HomeComponent } from './users/home/home.component';
import { ListUsersComponent } from './users/list-users/list-users.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cadastro',
    component: CreateUsersComponent
  },
  {
    path: 'lista',
    component: ListUsersComponent
  },
  {
    path: 'editar',
    children:[
      {
        path: ':id',
        component: EditUsersComponent,
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
