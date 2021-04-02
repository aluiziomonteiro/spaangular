import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/core/usuarios.service';
import { Usuario } from 'src/app/shared/models/usuario';

@Component({
  selector: 'spa-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private servico: UsuariosService) { }

  usuarios: Usuario[] = [];

  ngOnInit(): void {
    this.servico.listar().subscribe(objetos => this.usuarios = objetos);
  }
}
