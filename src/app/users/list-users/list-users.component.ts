import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'spa-list',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private servico: UserService) { }

  users: User[] = [];

  ngOnInit(): void {
    this.servico.listar().subscribe(object => this.users = object);
  }
}
