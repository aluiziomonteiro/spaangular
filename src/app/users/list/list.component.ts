import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'spa-listar',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private servico: UserService) { }

  users: User[] = [];

  ngOnInit(): void {
    this.servico.listar().subscribe(object => this.users = object);
  }
}
